// using System;
// using System.Collections.Generic;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Identity;
// using TheWall.Models;
// using TheWall.Factories;
// using Microsoft.AspNetCore.Http;

// namespace login_reg.Controllers
// {
//     public class UserController : Controller
//     {
//         private readonly UserFactory userFactory;
//         private readonly PasswordHasher<User> Hash;

//         public UserController(UserFactory uf)
//         {
//             userFactory = uf;
//             Hash = new PasswordHasher<User>();
//         }

//         [HttpGet]
//         [Route("")]
//         public IActionResult Index()
//         {
//             return View();
//         }


//         [HttpGet]
//         [Route("account")]
//         public IActionResult Account()
//         {
//             if (HttpContext.Session.GetInt32("User") != null)
//             {
//                 return RedirectToAction("Wall", "Wall");
//             }

//             return View();
//         }

//         [HttpPost]
//         [Route("login")]
//         public IActionResult PostLogin(String Email, String Password)
//         {
//             if (Email != null && Password != null)
//             {
//                 User user = userFactory.FindByEmail(Email);

//                 if (user != null && Hash.VerifyHashedPassword(user, user.Password, Password) != 0)
//                 {
//                     HttpContext.Session.SetInt32("User", user.Id);
//                     return RedirectToAction("Wall", "Wall");
//                 }
//                 else {
//                     ViewBag.Error = new List<string> {"Unable to login!"};
//                     return View("Account");
//                 }
//             }
//             else {
//                 ViewBag.Error = new List<string> {"Both fields require an entry to login."};
//                 return View("Account");
//             }
//         }

//         [HttpPost]
//         [Route("register")]
//         public IActionResult PostRegister(User u)
//         {
//             if (ModelState.IsValid)
//             {
//                 u.Password = Hash.HashPassword(u, u.Password);

//                 int id = userFactory.Add(u);

//                 HttpContext.Session.SetInt32("User", id);

//                 return RedirectToAction("Wall", "Wall");
//             }
//             else
//             {
//                 return View("Account");
//             }
//         }

//         [HttpGet]
//         [Route("/logout")]
//         public IActionResult Logout()
//         {
//             HttpContext.Session.Remove("User");
//             return RedirectToAction("Account");
//         }
//     }
// }