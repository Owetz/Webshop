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
    public class SizesController : ControllerBase
    {
        private readonly ILogger<SizesController> _logger;

        public SizesController(ILogger<SizesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Size> Get(){
            using (ShopContext context = new ShopContext())
            {
                return context.Sizes.ToList();
            }
        }
    }
}