using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebShop.Models;

namespace WebShop.Contexts {
    public class ShopContext : DbContext {
        public DbSet<Product> Products {get;set;}
        public DbSet<Order> Orders {get;set;}
        public DbSet<Size> Sizes {get;set;}
        public DbSet<Color> Colors {get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source = webshop.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Size>().HasData(new Size{
                Id = 1,
                SizeName = "XL",
            });

            modelBuilder.Entity<Color>().HasData(new Color {
                Id = 1,
                ColorName = "Red",
            });

            modelBuilder.Entity<Color>().HasData(new Color {
                Id = 2,
                ColorName = "Blue",
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 1,
                ArticleName = "Pig",
                Price = "25",
                Description = "Origami pig, beautiful - right?",
                Image = "pig.jpg"
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 2,
                ArticleName = "Birds",
                Price = "30",
                Description = "Origami Birds, lovely indeed..",
                Image = "birds.jpg"
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
                ColorId = 2,
                SizeId = 1,
            });

            modelBuilder.Entity<OrderLineItem>().HasData(new OrderLineItem{
                Id = 2,
                OrderId = 1,
                ProductId = 1,
                Quantity = 3,
                ColorId = 1,
                SizeId = 1,
            });
            
        }
    }
}