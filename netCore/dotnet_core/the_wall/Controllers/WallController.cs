using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using the_wall.Models;

namespace the_wall.Controllers
{
    public class WallController : Controller
    {
        private WallContext _context; //create private class to hold our context object
        public WallController(WallContext context) //on controller instantiation...
        {
            _context = context; //populate the private context object with a services context object
        }

        [HttpGet]
        [Route("thebacon")]
        public IActionResult Bacon()
        {
            int? userId = HttpContext.Session.GetInt32("User");
            User currUser = _context.Users.SingleOrDefault(user => user.UserId == (int)userId);
            ViewBag.User = currUser;
            ViewBag.Bacon = currUser.FirstName;
            // ViewBag.Messages = wallFactory.FindAll();

            return View("Dashboard");
        }

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