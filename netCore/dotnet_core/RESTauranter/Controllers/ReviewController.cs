using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestSpace.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace RestSpace.Controllers
{
    public class ReviewController : Controller
    {
        private RestContext _context; //create private class to hold our context object
        public ReviewController(RestContext context) //on controller instantiation...
        {
            _context = context; //populate the private context object with a services context object
        }
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.errors = new List<Dictionary<object, string>>();
            return View();
        }

        [HttpGet]
        [Route("the_reviews")]
        public IActionResult the_reviews()
        {
            List<Review> allReviews = _context.Reviews.ToList();
            if (allReviews.Count > 0) //if there are reviews in the DB...
            {
                ViewBag.reviewShow = true; //allow the reviewContainer to be viewed and change h1
                ViewBag.reviews = allReviews; //send the reviews to the Reviews page in ViewBag
            }
            else //if there aren't any reviews in the DB yet...
            {
                ViewBag.reviewShow = false; //don't allow the quoteContainer to be viewed and set default h1
            }
            return View("Reviews");
        }

        [HttpPost]
        [Route("add_review")]
        public IActionResult AddReview(Review model)
        {
            if (ModelState.IsValid)
            {
                Review NewReview = new Review
                {
                    ReviewName = model.ReviewName,
                    RestaurantName = model.RestaurantName,
                    Rating = model.Rating,
                    ReviewText = model.ReviewText,
                    VisitDate = model.VisitDate,
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                };
                _context.Add(NewReview);
                _context.SaveChanges();
                return RedirectToAction("the_reviews");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Index");
            }
        }
    }
}
