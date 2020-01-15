using System.Collections.Generic;
using System.ComponentModel;

namespace WebShop.Models
{

    public class Product
    {
        public int Id {get;set;}
        public string ArticleName {get;set;}
        public string Description {get;set;}
        //public List<Size> Sizes { get; set; }
        //public List<Color> Colors { get; set; }
        public int Price {get;set;}
        [DefaultValue("/images/test.jpg")]
        public string Image {get;set;}
        //public List<String> Sizes {get;set;}
        //public List<String> Colors {get;set;}
    }
}