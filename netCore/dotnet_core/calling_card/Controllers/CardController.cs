using Microsoft.AspNetCore.Mvc;

namespace CardSpace
{
    public class CardsController : Controller
    {
        [HttpGet]
        [Route("card/{FirstName}/{LastName}/{Age}/{FavColor}")]
        public JsonResult CallCard(string FirstName, string LastName, int Age, string FavColor)
        {
            return Json(new {FirstName = FirstName, LastName = LastName, Age = Age, FavoriteColor = FavColor});
        }
    }
}
