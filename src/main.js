import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.filter('currency',(value) => {
  return '£'+ value.toLocaleString()+ '.00'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
