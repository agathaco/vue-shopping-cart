<template>
  <div class="basket">
    <h3>Total items: {{totalQuantity}}</h3>
    <h3>Total cost: {{totalCost | currency }}</h3>
    <div v-for="item in this.basketItems">
      <div>{{item.name}} | {{item.quantity}} | {{item.totalPrice | currency}} | <counter @updateCount="updateCount"></counter> | <button @click="deleteItem(item)">x</button></div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  import Counter from './Counter.vue';
export default {
  components: {
      Counter,
  },
  data() {
    return {
      totalCost: 0,
      totalQuantity: 0,
      basketItems: []
    }
  },
  methods: {
    calculateTotalCost() {
      const totalCost = this.basketItems.reduce((total, item) => {
        return total += item.totalPrice;
      }, 0);
      this.totalCost = totalCost;
    },
    calculateTotalQuantity() {
        const totalQuantity = this.basketItems.reduce((total, item) => {
          return total += item.quantity;
      }, 0);
      this.totalQuantity = totalQuantity;
    },
    updateBasketTotals() {
      this.calculateTotalCost()
      this.calculateTotalQuantity()
    },
    deleteItem(item) {
      this.basketItems.splice(item, 1);
      console.log(this.basketItems)
      this.updateBasketTotals();
    },
    updateCount() {

    },
    updateBasketItems(item) {
      // checking if the object is already in the basket
      let objIndex = this.basketItems.findIndex((obj => obj.id === item.id));
      if (objIndex !== -1) {
        // if yes, update it
        this.basketItems[objIndex].quantity = item.quantity;
        this.basketItems[objIndex].totalPrice = this.basketItems[objIndex].quantity * this.basketItems[objIndex].price;
      } else {
        // if no, add it
        if (item.quantity) {
        this.basketItems.push(item);
        } else {
          console.log('no item added')
        }
      }
    },
  },
  computed: {

  },
  created() {
    eventBus.$on('updateCart', item => {
      this.updateBasketItems(item);
      this.updateBasketTotals();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basket {
  position: fixed;
  top: 20px;
  right: 20px;
}

</style>
