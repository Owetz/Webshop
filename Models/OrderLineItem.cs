using System.Text.Json.Serialization;

namespace WebShop.Models {
    public class OrderLineItem {
        public int Id {get;set;}
        public int OrderId {get;set;}
        [JsonIgnore]
        public Order Order {get;set;}
        public int ProductId {get;set;}
        [JsonIgnore]
        public Product Product {get;set;}
        public int ColorId;
        [JsonIgnore]
        public Color Color {get;set;}
        public int SizeId {get;set;}
        [JsonIgnore]
        public Size Size {get;set;}
        public int Quantity {get;set;}
        public double Price {get;set;}
    }
}