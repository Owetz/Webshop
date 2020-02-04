using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebShop.Models;

namespace WebShop.Contexts {
    public class ShopContext : DbContext {
        public DbSet<Product> Products {get;set;}
        public DbSet<Order> Orders {get;set;}
        public DbSet<OrderLineItem> OrderLineItems{get;set;}
        public DbSet<Size> Sizes {get;set;}
        public DbSet<Color> Colors {get;set;}
        public DbSet<Customer> Customers {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source = webshop.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Size>().HasData(new Size{
                Id = 1,
                SizeName = "Stor",
            });
            modelBuilder.Entity<Size>().HasData(new Size{
                Id = 2,
                SizeName = "Liten",
            });

            modelBuilder.Entity<Color>().HasData(new Color {
                Id = 1,
                ColorName = "Röd",
            });

            modelBuilder.Entity<Color>().HasData(new Color {
                Id = 2,
                ColorName = "Blå",
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 1,
                ArticleName = "Pig",
                Price = 25.00,
                Description = "Origami pig, beautiful - right?",
                Image = "pig.jpg"
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 2,
                ArticleName = "Birds",
                Price = 30.00,
                Description = "Origami Birds, lovely indeed..",
                Image = "birds.jpg"
            });

            modelBuilder.Entity<Customer>().HasData(new Customer{
                Id = 1,
                Name = "Daniel Ahl",
                Email = "danielahl89@gmail.com",
                Address = "Nv 24", 
                ZipCode = "19545",
                City = "Märsta"
            });

            modelBuilder.Entity<Order>().HasData(new Order{
                Id = 1,
                CustomerId= 1,
                TotalCost = 115.00
            });

            modelBuilder.Entity<OrderLineItem>().HasData(new OrderLineItem{
                Id = 1,
                OrderId = 1,
                ProductId = 1,
                Quantity = 1,
                Color = "Rosa",
                Size = "Stor",
                Price = 25.00
            });

            modelBuilder.Entity<OrderLineItem>().HasData(new OrderLineItem{
                Id = 2,
                OrderId = 1,
                ProductId = 1,
                Quantity = 3,
                Color = "Blå",
                Size = "Liten",
                Price = 30.00
            });
            
        }
    }
}