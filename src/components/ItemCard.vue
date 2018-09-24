<template>
  <div class="item-box">
    <div>{{item.name}}</div>
    <div>{{item.price | currency}}</div>
    <div>{{item.description}}</div>
    <div>Quantity: {{item.quantity}}</div>
    <counter @updateCount="updateCount"></counter>
    Total: {{totalPrice | currency}}
    <add-button :item="item">Update Basket</add-button>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  import Counter from './Counter.vue';
  import AddButton from './AddButton.vue';
  export default {
    props: ['item'],
    components: {
      Counter,
      AddButton
    },
    data() {
      return {
        totalPrice: 0
      }
    },
    methods: {
      updateCount(count) {
        this.item.quantity = count;
        this.calculateItemTotal()
      },
      calculateItemTotal() {
        this.item.totalPrice = this.item.quantity * this.item.price
        this.totalPrice = this.item.totalPrice;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-box {
    margin: 10px;
    width: 300px;
    padding: 20px;
    display: inline-block;
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
</style>
