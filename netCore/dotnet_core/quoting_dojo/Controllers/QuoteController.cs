using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using quoting_dojo.Models;


namespace quoting_dojo.Controllers
{
    public class HomeController : Controller
    {
        private readonly DbConnector _dbConnector;
 
        public HomeController(DbConnector connect)
        {
            _dbConnector = connect;
        }
 
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.errors = new List<Dictionary<object, string>>();
            ViewBag.quotes = new List<Dictionary<object, string>>();
            return View("Index");
        }
        
        [HttpPost]
        [Route("add_quote")]
        public IActionResult New(Quote NewQuote)
        {
            if (ModelState.IsValid)
            {
               string Query = ($"INSERT INTO All_Quotes (the_name, the_quote, CreatedAt, UpdatedAt) VALUES ('{NewQuote.the_name}', '{NewQuote.the_quote}', NOW(), NOW())");
                // _dbConnector.Open();
                _dbConnector.Execute(Query);
                return RedirectToAction("quotes");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Index");
            }
        }

        [HttpGet]
        [Route("quotes")]
        public IActionResult Quotes()
        {
            List<Dictionary<string, object>> All_Quotes = _dbConnector.Query("SELECT * FROM All_Quotes");
            ViewBag.quotes = All_Quotes;
            return View("Quotes");
        }
    }
}
