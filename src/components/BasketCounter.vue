<template>
  <div class="counter">
     <h3>
    <button @click="decrement(item)" :disabled="count <= 0">-</button>
        {{count}}
    <button @click="increment(item)">+</button>
  </h3>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
  props: ['item'],
  data() {
      return {
        count: 0
      }
    },
    methods: {
      increment(item) {
        this.count++;
        eventBus.$emit('updateBasketCount', this.count, item)
      },
      decrement(item) {
        this.count--;
        eventBus.$emit('updateBasketCount', this.count, item)
      }
    },
    created() {
      // update count when items are added from cart
      eventBus.$on('updateCart', (item, count) => {
        if (item.id === this.item.id) {
          this.count = count;
        }
      })
    },
    // get count when items are first added to basket
    mounted() {
      this.count = this.item.quantity;
    }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
