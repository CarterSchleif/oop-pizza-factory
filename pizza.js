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
    constructor(type = cheese, price = 10.00) {
      this.type = type;
      this.price = price;
      console.log('In Pizza constructor, cheese pizza:', this);
    }
  }


  class Pepperoni extends Pizza {

    constructor(type = pepperoni, price) {
      super( type, price);
    }
  
    changePrice(){
      super.changePrice();
      this.price = price + .99;
      console.log('Pepperoni after price change:', this.price);
    }
  }

  class Bacon extends Pizza {
      constructor(type = bacon, price) {
          super(type, price);
      }
      changePrice(){
          super.changePrice();
          this.price = price + .99;
          console.log('Bacon after price hange:', this.price);
      }
  }
