using System.Collections.Generic;
using System.ComponentModel;

namespace WebShop.Models
{

    public class Product
    {
        public int Id {get;set;}
        public string ArticleName {get;set;}
        public string Description {get;set;}
        public double Price {get;set;}
        public string Image {get;set;}
    }
}