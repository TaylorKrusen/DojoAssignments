using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace DojodachiSpace.Controllers {
    public class DojodachiController : Controller {
        
        // Renders Index.cshtml
        [HttpGet]
        [RouteAttribute("")]
        public IActionResult Index() {
            Dojodachi dachi = new Dojodachi();
            HttpContext.Session.SetObjectAsJson("dachi",dachi);
            return View();
        }
        [HttpGet]
        [RouteAttribute("feed")]
        public JsonResult Feed() {
            Dojodachi dachi = HttpContext.Session.GetObjectFromJson<Dojodachi>("dachi");
            dachi.feed();
            HttpContext.Session.SetObjectAsJson("dachi",dachi);
            return Json(dachi);
        }

        [HttpGet]
        [RouteAttribute("play")]
         public JsonResult Play() {
            Dojodachi dachi = HttpContext.Session.GetObjectFromJson<Dojodachi>("dachi");
            dachi.play();
            HttpContext.Session.SetObjectAsJson("dachi",dachi);
            return Json(dachi);
        }

        [HttpGet]
        [RouteAttribute("work")]
         public JsonResult Work() {
            Dojodachi dachi = HttpContext.Session.GetObjectFromJson<Dojodachi>("dachi");
            dachi.work();
            HttpContext.Session.SetObjectAsJson("dachi",dachi);
            return Json(dachi);
        }

        [HttpGet]
        [RouteAttribute("sleep")]
         public JsonResult Sleep() {
            Dojodachi dachi = HttpContext.Session.GetObjectFromJson<Dojodachi>("dachi");
            dachi.sleep();
            HttpContext.Session.SetObjectAsJson("dachi",dachi);
            return Json(dachi);
        }

    }
}