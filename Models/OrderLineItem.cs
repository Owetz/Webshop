using System.Text.Json.Serialization;

namespace WebShop.Models {
    public class OrderLineItem {
        public int Id {get;set;}
        public int OrderId {get;set;}
        [JsonIgnore]
        public Order Order {get;set;}
        public int ProductId {get;set;}
        public Product Product {get;set;}
        public string Color {get;set;}
        public string Size {get;set;}
        public int Quantity {get;set;}
        public double Price {get;set;}
    }
}