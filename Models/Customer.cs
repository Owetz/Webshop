using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace WebShop.Models {
    public class Customer {
        public int Id {get;set;}
        public string Name {get;set;}
        public string Email {get;set;}
        public string Address {get;set;}
        public string ZipCode {get;set;}
        public string City {get;set;}

        [JsonIgnore]
        public List<Order> Orders {get;set;}
    }
}