using System.Collections.Generic;

namespace WebShop.Models {
    public class Order {
        public int Id {get;set;}
        public string Customer {get;set;}
        public string CustomerEmail {get;set;}
        public List<OrderLineItem> OrderLineItems {get;set;}
        public double TotalCost {get;set;}
    }
}