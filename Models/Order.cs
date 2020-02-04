using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace WebShop.Models {
    public class Order {
        public int Id {get;set;}
        public int CustomerId {get;set;}
        
        public Customer Customer {get;set;}
        public List<OrderLineItem> OrderLineItems {get;set;}
        public double TotalCost {get;set;}
    }
}