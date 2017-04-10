using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace PasscodeController.Controllers
{
    public class PasscodeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("new_passcode")]
        public IActionResult generatePasscode()
        {
            int? TheCount = HttpContext.Session.GetInt32("TheCount");
            if (TheCount == null)
            {
                TheCount = 1;
            }
            TheCount += 1;
            Console.WriteLine("this is the counter: " + TheCount);
            HttpContext.Session.SetInt32("Counter", (int)TheCount);
            string newStr = RandomString(14);
            ViewBag.count = HttpContext.Session.GetInt32("Counter");
            ViewBag.passcode = newStr;
            Console.WriteLine("THE COUNT IS THIS: " + ViewBag.count);
            return View("Index");
        }
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
