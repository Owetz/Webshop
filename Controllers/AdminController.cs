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
    public class AdminController : ControllerBase
    {
        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Order> Get()
        {
            using (ShopContext context = new ShopContext())
            {
                return context.Orders.Include(o => o.OrderLineItems).ThenInclude(o => o.Product).ToList();
            }
        }
        [HttpGet("{id}")]
        public Order Get(int id){
            using(ShopContext context = new ShopContext())
            {
                //return context.Orders.Include(o => o.OrderLineItems).ThenInclude(o => o.Product).Find(id);
                    return context.Orders.Include(o => o.OrderLineItems).ThenInclude(o => o.Product).SingleOrDefault(x => x.Id == id);
            }
        }

        [HttpPost("order")]
        //public IActionResult Post([FromBody] Product newProduct) {
        public IActionResult Post([FromBody] Order newOrder){
            using(ShopContext context = new ShopContext()) {
                context.Orders.Add(newOrder);
                context.SaveChanges();
            }
            return Created("/admin", newOrder);
        }
        [HttpPost("oli")]
        public IActionResult Post([FromBody] OrderLineItem newOLI){
            using(ShopContext context = new ShopContext()) {
                context.OrderLineItems.Add(newOLI);
                context.SaveChanges();
            }
            return Created("/admin", newOLI);
        }
    }
}