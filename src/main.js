import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.filter('currency',(value) => {
  return '£'+ parseFloat(value).toFixed(2);
})

new Vue({
  render: h => h(App)
}).$mount('#app')
