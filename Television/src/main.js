import Vue from 'vue'
import App from './App.vue'
import '@/bootup'
import '@/style/index.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
