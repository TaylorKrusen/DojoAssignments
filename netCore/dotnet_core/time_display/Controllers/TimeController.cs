using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace TimeSpace
{
    public class TimeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            DateTime CurrentTime = DateTime.Now;
            string dateform = "MMM ddd yyyy";
            string timeform = "HH:mm tt";
            Console.WriteLine("current time is: " + CurrentTime);
            ViewData["CurrTime"] = CurrentTime.ToString(timeform);
            ViewData["CurrDate"] = CurrentTime.ToString(dateform);
            return View("TimeDisplay");
        }
    }
}