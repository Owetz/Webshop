using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebShop.Models;

namespace WebShop.Contexts {
    public class ShopContext : DbContext {
        public DbSet<Product> Products {get;set;}
        public DbSet<Order> Orders {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source = webshop.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 1,
                ArticleName = "Circle",
                Price = 25,
            });

            modelBuilder.Entity<Order>().HasData(new Order{
                Id = 1,
                Customer = "Daniel",
            });

            modelBuilder.Entity<OrderLineItem>().HasData(new OrderLineItem{
                Id = 1,
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
            });

            modelBuilder.Entity<OrderLineItem>().HasData(new OrderLineItem{
                Id = 2,
                OrderId = 1,
                ProductId = 1,
                Quantity = 3,
            });
            
        }
    }
}