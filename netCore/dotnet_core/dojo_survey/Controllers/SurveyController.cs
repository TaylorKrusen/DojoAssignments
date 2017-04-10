using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey
{
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        [Route("result")]
        public IActionResult Result()
        {
            return View("Result");
        }

        [HttpPost]
        [Route("survey_data")]
        public IActionResult FormMethodName(string First, string Last, string Email, int Phone, string Message)
        {
            // Do something with form input
            Console.WriteLine(First + Last + Email + Phone + Message);
            return View("Home");
        }
    }
}
