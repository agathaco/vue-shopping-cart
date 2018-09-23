<template>
  <div class="counter">
     <h3>
    <button @click="decrement" :disabled="count <= 0">-</button>
        {{count}}
    <button @click="increment">+</button>
  </h3>
  </div>
</template>

<script>
export default {
  data() {
      return {
        count: 0
      }
    },
    methods: {
      increment(count) {
        this.count++;
        this.$emit('updateCount', this.count)
      },
      decrement() {
        this.count--;
        this.$emit('updateCount', this.count)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
