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
                ArticleName = "Gris",
                Price = 25.00,
                Description = "Origamigris, väldigt vikt i många riktningar.",
                Image = "pig.jpg"
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 2,
                ArticleName = "Fåglar",
                Price = 30.00,
                Description = "Fina pappersfåglar. Gör sig bäst vid middagar.",
                Image = "birds.jpg"
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 3,
                ArticleName = "Elefanter",
                Price = 50.00,
                Description = "Elefanter är fina djur.",
                Image = "elephants.jpg"
            });

            modelBuilder.Entity<Product>().HasData(new Product{
                Id = 4,
                ArticleName = "Svanar",
                Price = 50.00,
                Description = "Svanar är fåglar, fast på vatten.",
                Image = "swans.jpg"
            });
            
        }
    }
}