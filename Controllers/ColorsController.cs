using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebShop.Contexts;
using WebShop.Models;



namespace WebShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ColorsController : ControllerBase
    {
        private readonly ILogger<ColorsController> _logger;

        public ColorsController(ILogger<ColorsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Color> Get(){
            using (ShopContext context = new ShopContext())
            {
                return context.Colors.ToList();
            }
        }
    }
}