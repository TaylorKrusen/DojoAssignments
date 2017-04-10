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
                TheCount = 0;
            }
            TheCount += 1;
            HttpContext.Session.SetInt32("TheCount", (int)TheCount);
            string newStr = RandomString(14);
            ViewBag.count = HttpContext.Session.GetInt32("TheCount");
            ViewBag.passcode = newStr;
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
