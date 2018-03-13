console.log('js');

class Order {
    constructor(cheese = 0, pepperoni = 0, bacon = 0){
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.bacon = bacon;
        console.log('In Order constructor, order:', this);
    }
}



class Pizza {
    constructor(type, price = 10.00) {
      this.type = type;
      this.price = price;
      console.log('In Pizza constructor, cheese pizza:', this);
    }
    changePrice(){
        // super.changePrice();
      this.price = this.price + .99;
    }
  }

  let cheesePizza = new Pizza('cheese', 10.00);
//   console.log('CHEESE PIZZA:', cheesePizza);

  class Pepperoni extends Pizza {

    constructor(type = pepperoni, price) {
      super( type, price);
    }
  }

  let pepperoniPizza = new Pepperoni('pepperoni', 10.00);
  console.log('pepperoni before price change:', pepperoniPizza)
pepperoniPizza.changePrice();
console.log('pepperoni after price change:', pepperoniPizza);


  class Bacon extends Pizza {
      constructor(type = bacon, price) {
          super(type, price);
      }
  }


  