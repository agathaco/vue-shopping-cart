<template>
  <div id="app" class="app">
    <div class="container">
      <div class="container-header">
        <h2>Your shopping</h2>
      </div>
      <!-- <Grid :items="itemsArray"></Grid> -->
      <card :item="item" v-for="(item, index) in this.itemsArray">{{item.name}}</card>
    </div>
  </div>
</template>

<script>
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
        {name: 'Wine', price: "10", description:'Hi, I\'m wine!'},
        {name: 'Icecream', price: "5", description:'Hi, I\'m Icecream!'},
        {name: 'Chocolate', price: "3", description:'Hi, I\'m Chocolate!'},
        {name: 'Cheese', price: "7", description:'Hi, I\'m Cheese!'},
      ],
    }
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
</style>
