using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace CardSpace
{
    public class HelloController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            // return View();
            // //OR
            return View("Index");
            //Both of these returns will render the same view (You only need one!)
        }
    }
}