<template>
  <div id="app" class="app">
    <div class="container">
      <div class="container-header">
        <h2>Your shopping</h2>
      </div>
      <card  :item="item" v-for="item in this.itemsArray">{{item.name}}</card>
      <Basket :basketItems="globalBasketItems"></Basket>
      
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
import Card from './components/ItemCard.vue';
import Counter from './components/Counter.vue';
import BasketCounter from './components/BasketCounter.vue';
import Basket from './components/Basket.vue';
import AddButton from './components/AddButton.vue';

export default {
  components: {
    Card,
    AddButton,
    Counter,
    Basket,
    BasketCounter
  },
  data() {
    return {
      itemsArray: [
        {id:1, name: 'Wine', price: 10, description:'Hi, I\'m wine!', quantity:0, totalPrice:0},
        {id:2, name: 'Icecream', price: 5, description:'Hi, I\'m Icecream!', quantity:0, totalPrice:0},
        {id:3, name: 'Chocolate', price: 3, description:'Hi, I\'m Chocolate!', quantity:0, totalPrice:0},
        {id:4, name: 'Cake', price: 12, description:'Hi, I\'m Cake!',quantity:0, totalPrice:0},
        {id:5, name: 'Coffee', price: 4, description:'Hi, I\'m Coffee!', quantity:0, totalPrice:0},
        {id:6, name: 'Cheese', price: 7, description:'Hi, I\'m Cheese!', quantity:0, totalPrice:0}
      ],
      globalBasketItems: [],
    }
  },
  methods: {
    updateBasketItems(item, count) {
      if (item.quantity !== count) {
          // updating item data
          item.quantity = count;
          item.totalPrice = item.quantity * item.price;

          let objIndex = this.globalBasketItems.findIndex((obj => obj.id === item.id));
          // checking if the object is already in the basket
            if (objIndex !== -1) {
              // if yes, update it
              this.globalBasketItems[objIndex].quantity = item.quantity;
              this.globalBasketItems[objIndex].totalPrice = this.globalBasketItems[objIndex].quantity * this.globalBasketItems[objIndex].price;
            } else {
              // if no, add it
              if (item.quantity) {
                this.globalBasketItems.push(item);
              }
            }
      }
    },

  },
  created() {
    // removing items from basket form delete button in basket
    eventBus.$on('deleteItem', item => {
        this.globalBasketItems.splice(item, 1);
    })

    // adding or updating items in basket from car button
    eventBus.$on('updateCart', (item, count) => {
      this.updateBasketItems(item, count);
    })

    //updating basket items and totals from basket counters
    eventBus.$on('updateBasketCount', (count, item) => {
        this.updateBasketItems(item, count);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  cursor: pointer;
}

</style>
