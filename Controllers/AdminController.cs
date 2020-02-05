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
                return context.Orders.Include(order => order.OrderLineItems).ThenInclude(oli => oli.Product).Include(order => order.Customer).ToList();
            }
        }

        [HttpGet("{id}")]
        public Order Get(int id){
            using(ShopContext context = new ShopContext())
            {
                return context.Orders.SingleOrDefault(x => x.Id == id);
            }
        }

        [HttpPost("order")]
        public IActionResult Post([FromBody] Order newOrder){
            
            using(ShopContext context = new ShopContext()) {
                Customer customer = context.Customers.FirstOrDefault(c => c.Email == newOrder.Customer.Email);

                if(customer != null) {
                    //newOrder.CustomerId = customer.Id;
                    newOrder.Customer = customer;
                }

                context.Orders.Add(newOrder);
                context.SaveChanges();
            }
            return Created("/admin", newOrder);
        }
    }
}