using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebShop.Contexts;
using WebShop.Models;

namespace WebShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            using(ShopContext context = new ShopContext()) {
                return context.Products.ToList();
            }
        }

        [HttpGet("{id}")]
        public Product Get(int id)
        {
            using(ShopContext context = new ShopContext()){
                return context.Products.Find(id);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product newProduct) {
            using(ShopContext context = new ShopContext()) {
                context.Products.Add(newProduct);
                context.SaveChanges();
            }

            return Created("/products", newProduct);
        }
    }
}
