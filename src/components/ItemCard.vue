<template>
  <div class="item-box">
    <div>{{item.name}}</div>
    <div>{{item.price | currency}}</div>
    <div>{{item.description}}</div>
    <counter @updateCount="updateCount"></counter>
    Total: {{count * item.price | currency}}
    <add-button>Add to Basket</add-button>
  </div>
</template>

<script>
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
        count: 0
      }
    },
    methods: {
      updateCount(count) {
        this.count = count;
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
