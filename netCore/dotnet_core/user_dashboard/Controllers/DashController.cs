using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using user_dash.Models;

namespace user_dash.Controllers
{
    public class DashController : Controller
    {
        private DashContext _context; //create private class to hold our context object
        public DashController(DashContext context) //on controller instantiation...
        {
            _context = context; //populate the private context object with a services context object
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult SigninPage()

        {
            HttpContext.Session.Clear();
            return RedirectToAction("Account", "User");
        }

        [HttpGet]
        [Route("dashboard")]
        public IActionResult DashHome()
        {
            int? userId = HttpContext.Session.GetInt32("User");
            User currUser = _context.Users.SingleOrDefault(user => user.UserId == (int)userId);
            ViewBag.User = currUser;
            if (currUser != null)
            {
                List<User> AllUsers = _context.Users.ToList();
                ViewBag.Users = AllUsers;
                return View("Dashboard");
            }
            else
            {
                return RedirectToAction("Account", "User");
            }
        }

        [HttpGet]
        [Route("/users/new")]
        public IActionResult AddUser()
        {
            ViewBag.RegView = new RegViewModel();
            return View("NewUser");
        }
        [HttpPost]
        [Route("NewUser")]
        public IActionResult NewUserReg(RegViewModel model)
        {
            if (ModelState.IsValid)
            {
                User checkUser = _context.Users.SingleOrDefault(user => user.Email == model.Email);
                if (checkUser != null)
                {
                    ViewBag.DupeReg = "That email is already registered to a User!";
                    return View("NewUser");
                }
                else // that user doesn't have an account yet
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    User NewUser = new User
                    {
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Email = model.Email,
                        Password = model.Password,
                        CreatedAt = DateTime.Now,
                        UpdatedAt = DateTime.Now,
                        Admin = 0
                    };
                    NewUser.Password = Hasher.HashPassword(NewUser, NewUser.Password);
                    _context.Users.Add(NewUser);
                    _context.SaveChanges();
                    return RedirectToAction("DashHome");
                }

            }
            ViewBag.RegErrors = true; 
            return View("NewUser", model); 
        }
        [HttpGet]
        [Route("delete/{id}")]
        public IActionResult RemoveUser(int id)
        {
            int? userId = HttpContext.Session.GetInt32("User");
            if (userId != id)
            {
                User delUser = _context.Users.SingleOrDefault(usr => usr.UserId == id);
                _context.Users.Remove(delUser);
                _context.SaveChanges();
            }
            return RedirectToAction("DashHome");
        }
        [HttpGet]
        [Route("/users/edit/{id}")]
        public IActionResult EditUser(int id)
        {
            User ThisUser = _context.Users.SingleOrDefault(usr => usr.UserId == id);
            ViewBag.ThisUser = ThisUser;
            ViewBag.EditInfo = TempData["EditMsg"];
            return View("EditUser");
        }
        [HttpPost]
        [Route("editinfo/{id}")]
        public IActionResult UpdateUserInfo(int id, string Email, string FirstName, string LastName)
        {
            User thatUser = _context.Users.SingleOrDefault(usr => usr.UserId == id);
            thatUser.FirstName = FirstName;
            thatUser.LastName = LastName;
            thatUser.Email = Email;
            _context.SaveChanges();
            TempData["EditMsg"] = "Successfully updated Profile.";
            return RedirectToAction("EditUser", new{id = id});
        }
        [HttpPost]
        [Route("editpass/{id}")]
        public IActionResult UpdateUserPW(int id, string Password, string Confirm)
        {
            if(Password == Confirm)
            {
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                User thatUser = _context.Users.SingleOrDefault(usr => usr.UserId == id);
                thatUser.Password = Hasher.HashPassword(thatUser, thatUser.Password);
                TempData["EditMsg"] = "Successfully updated Profile.";
                return RedirectToAction("EditUser", new{id = id});
            }
            else
            {
                TempData["EditMsg"] = "Passwords did't match. Password NOT CHANGED.";
                return RedirectToAction("EditUser", new{id = id});
            }
        }
        [HttpPost]
        [Route("editdescription/{id}")]
        public IActionResult UpdateUserDescription(int id, string Description)
        {
            User thatUser = _context.Users.SingleOrDefault(usr => usr.UserId == id);
            thatUser.Description = Description;
            _context.SaveChanges();
            TempData["SuccessMsg"] = "Successfully updated Description.";
            return RedirectToAction("EditUser", new{id = id});
        }
        // [HttpGet]
        // [Route("/users/show/{id}")]
        // public IActionResult ShowProfile(int id)
        // {
        //     ViewBag.loggedin = HttpContext.Session.GetInt32("user").Value;
        //     ViewBag.allusers = UserFactory.AllUsers();
        //     ViewBag.comments = CommentFactory.AllComments();
        //     ViewBag.user = UserFactory.FindUser(id);
        //     ViewBag.users_wall = MessageFactory.Messages(id);
        //     return View("UserInformation");
        // }
        // [HttpPost]
        // [Route("postMessage")]
        // public IActionResult PostMessage(String message)
        // {
        //     int? user = HttpContext.Session.GetInt32("User");
        //     if( user == null)
        //     {
        //         return RedirectToAction("Account", "User");
        //     }
        //     if (message != null)
        //     {
        //         Message msg = new Message {
        //             Text = message,
        //             User = userFactory.FindByID((int)user)
        //         };

        //         wallFactory.AddMessage(msg);

        //         return RedirectToAction("Wall");
        //     }
        //     else
        //     {
        //         return RedirectToAction("Wall");
        //     }
        // }

        // [HttpPost]
        // [Route("postComment/{Id}")]
        // public IActionResult PostComment(Comment comment, int Id)
        // {
        //     int? user = HttpContext.Session.GetInt32("User");
        //     if( user == null)
        //     {
        //         return RedirectToAction("Account", "User");
        //     }

        //     if (ModelState.IsValid)
        //     {
        //         comment.User = userFactory.FindByID((int)user);
        //         comment.Message = wallFactory.FindMessageById(Id);
        //         wallFactory.AddComment(comment);
        //         return RedirectToAction("Wall");
        //     }
        //     else
        //     {
        //         return RedirectToAction("Wall");
        //     }
        // }
    }
}