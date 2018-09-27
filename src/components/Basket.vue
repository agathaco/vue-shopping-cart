<template>
  <div class="basket">
    <h3>Total items: {{totalItems()}}</h3>
    <h3>Total cost: {{totalPrice() | currency }}</h3>
    <div v-for="item in this.basketItems">
      <div>{{item.name}} | {{item.quantity}} | {{item.totalPrice | currency}} | <basket-counter :item="item" @updateBasketData="updateBasketData" ></basket-counter> | <button @click="deleteItem(item)">x</button></div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  import BasketCounter from './BasketCounter.vue';
export default {
  components: {
      BasketCounter,
  },
  props: ['basketItems'],
  data() {
    return {
      totalItemPrice: 0,
    }
  },
  methods: {
    totalItems() {
      return this.basketItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    totalPrice() {
      return this.basketItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },

    updateBasketData() {
      this.totalItems()
      this.totalPrice()
    },
    deleteItem(item) {
      eventBus.$emit('deleteItem', item),
      this.updateBasketTotals();
    },
    updateItemTotals(count, item) {
      // set item quantity to count
      item.quantity = count;
      // calculate total price according to quantity
      item.totalPrice = item.quantity * item.price;
      //update the totalPrice variable for display
      totalItemPrice = item.totalPrice;
    },
  },

}
</script>


<style scoped>
.basket {
  position: fixed;
  top: 20px;
  right: 20px;
}

</style>
