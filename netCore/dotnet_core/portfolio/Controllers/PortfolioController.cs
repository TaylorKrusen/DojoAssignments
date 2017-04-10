using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers
{
    public class PortfolioController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Home()
        {
            return View("Home");
        }

        [HttpGet]
        [Route("projects")]
        public IActionResult Projects()
        {
            return View("Projects");
        }

        [HttpGet]
        [Route("contact")]
        public IActionResult Contact()
        {
            return View("Contact");
        }

        [HttpPost]
        [Route("the_form")]
        public IActionResult FormMethodName(string First, string Last, string Email, int Phone, string Message)
        {
            // Do something with form input
            Console.WriteLine(First + Last + Email + Phone + Message);
            return View("Home");
        }
    }
}
