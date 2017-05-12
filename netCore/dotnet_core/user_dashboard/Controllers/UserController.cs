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
    public class UserController : Controller
    {
        private DashContext _context; //create private class to hold our context object
        public UserController(DashContext context) //on controller instantiation...
        {
            _context = context; //populate the private context object with a services context object
        }

        [HttpGet]
        [Route("")]
        public IActionResult Account()
        {
            ViewBag.LogView = new LogViewModel(); //pass an empty LogViewModel to the front end
            ViewBag.RegView = new RegViewModel(); //pass an empty RegViewModel to the front end
            return View("Login"); //render the Login page
        }
        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegViewModel model)
        {
            if (ModelState.IsValid) //if the data meets our requirements...
            {
                User checkUser = _context.Users.SingleOrDefault(user => user.Email == model.Email); //attempt to retrieve a user based on the e-mail entered...
                if (checkUser != null) //if a user is retrieved based on the entered email address..
                {
                    ViewBag.DupeReg = "User already exists, please log in."; //pass this error to the front end
                    return View("Login"); //return the user to the Login page with error...
                }
                else // that user doesn't exists
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>(); //create a new PasswordHasher object
                    User NewUser = new User //create a new user object with the appropriate corresponding information from the view model
                    {
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Email = model.Email,
                        Password = model.Password,
                        CreatedAt = DateTime.Now,
                        UpdatedAt = DateTime.Now,
                        Admin = 0
                    };
                    if (NewUser.UserId == 5)
                    {
                        NewUser.Admin = 1;
                    }
                    NewUser.Password = Hasher.HashPassword(NewUser, NewUser.Password); //hash the password
                    _context.Users.Add(NewUser); //add user to db
                    _context.SaveChanges();
                    User currUser = _context.Users.SingleOrDefault(user => user.Email == model.Email); //retrieve the user from the database and store them in currUser (do this to get their user id)
                    HttpContext.Session.SetInt32("User", (int)currUser.UserId);
                    return RedirectToAction("DashHome", "Dash"); //return to the Success page
                }

            }
            ViewBag.RegErrors = true; //set regerrors to true to display the error box
            return View("Login", model); //return the user to Login with the RegViewModel and errors
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LogViewModel model)
        {
            User checkUser = _context.Users.SingleOrDefault(user => user.Email == model.LogEmail); //make user object and compare to email address
            if (ModelState.IsValid) // if the data is valid...
            {
                var Hasher = new PasswordHasher<User>(); // make an object to check hashed password
                if (checkUser == null) // if no user matches that email address...
                {
                    ViewBag.DupeLog = "Username or password incorrect."; //store this error in ViewBag
                    return View("Login"); //send error back to the Login page
                }
                else if (Hasher.VerifyHashedPassword(checkUser, checkUser.Password, model.LogPass) == 0) //if the password entered doesn't match the password in the DB...
                {
                    ViewBag.DupeLog = "Username or password incorrect."; //store this error in ViewBag
                    return View("Login"); //send error back to the Login page
                }
                else // if a user is retrieved and the password is CORRECT...
                {
                    HttpContext.Session.SetInt32("User", (int)checkUser.UserId);
                    return RedirectToAction("DashHome", "Dash"); //return to the Success page
                }
            }
            ViewBag.LogErrors = true; //unhide the errors on the Login portion of the page
            return View("Login", model); //return the user to Login
        }
    }
}
