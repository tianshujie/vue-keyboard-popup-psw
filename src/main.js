import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
});
Vue.prototype.hideLoading = function(){
  console.log(this)
}
Vue.prototype.showLoading = function(){
  console.log(this)
}