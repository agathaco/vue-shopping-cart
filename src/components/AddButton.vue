<template>
  <button class="button" @click="addToCart(item)">
    <slot></slot>
  </button>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: ['item'],
  methods: {
    addToCart(item) {
        eventBus.$emit('updateCart', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
