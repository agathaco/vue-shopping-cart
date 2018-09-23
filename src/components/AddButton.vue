<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
}
</style>
