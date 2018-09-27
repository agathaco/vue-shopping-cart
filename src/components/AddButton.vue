<template>
  <button class="button" @click="addToCart(item, count)">
    <slot></slot>
  </button>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: ['item'],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    // sending the count to app.vue to update the global array of items
    addToCart(item, count) {
      eventBus.$emit('updateCart', item, this.count)
    },
  },
  created() {
    // get the count when card counter is updated
    eventBus.$on('updateCardCount', (count, item) => {
      if (item.id === this.item.id) {
        this.count = count;
      }
    }),

    // get the count when basket counter is updated
    eventBus.$on('updateBasketCount', (count, item) => {
      if (item.id === this.item.id) {
        this.count = count;
      }
    })
  }
}
</script>

<style scoped>
.button {
  margin: 10px auto;
  width:150px;
  padding:10px;
  display: block;
  background-color: mistyrose;
  cursor: pointer;
  border:0;
}
</style>
