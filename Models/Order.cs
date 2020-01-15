using System.Collections.Generic;

namespace WebShop.Models {
    public class Order {
        public int Id {get;set;}
        public string Customer {get;set;}
        public List<OrderLineItem> OrderLineItems {get;set;}
        public int TotalCost => getTotal();

        static int getTotal() {
            int total = 23;
            return total;
        }
    }
}