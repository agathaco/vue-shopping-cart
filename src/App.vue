<template>
  <div id="app" class="app">
    <div class="container">
      <div class="container-header">
        <h2>Your shopping</h2>
      </div>
      <card :item="item" v-for="item) in this.itemsArray" >{{item.name}}</card>
      <Basket></Basket>
    </div>
  </div>
</template>

<script>
// import { eventBus } from './main';
import Card from './components/ItemCard.vue';
import Counter from './components/Counter.vue';
import Basket from './components/Basket.vue';
import AddButton from './components/AddButton.vue';

export default {
  components: {
    Card,
    AddButton,
    Counter,
    Basket
  },
  data() {
    return {
      itemsArray: [
        {id:1, name: 'Wine', price: 10, description:'Hi, I\'m wine!'},
        {id:2, name: 'Icecream', price: 5, description:'Hi, I\'m Icecream!'},
        {id:3, name: 'Chocolate', price: 3, description:'Hi, I\'m Chocolate!'},
        {id:4, name: 'Cake', price: 12, description:'Hi, I\'m Cake!'},
        {id:5, name: 'Coffee', price: 4, description:'Hi, I\'m Coffee!'},
        {id:6, name: 'Cheese', price: 7, description:'Hi, I\'m Cheese!'},
      ],
      basketItems: [],
    }
  },
  methods: {

  },
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
