<template>
  <div class="counter">
     <h3>
    <button @click="decrement(item)" :disabled="count <= 0">-</button>
        {{count}}
    <button @click="increment(item)">+</button>
    <slot></slot>
    <slot></slot>
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
        eventBus.$emit('updateCardCount', this.count, item)

      },
      decrement(item) {
        this.count--;
        eventBus.$emit('updateCardCount', this.count, item)
      }
    },
    created() {
      // update counter when basket counter is updated
      eventBus.$on('updateBasketCount', (count, item) => {
        if (item.id === this.item.id) {
          this.count = count;
        }
      })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
