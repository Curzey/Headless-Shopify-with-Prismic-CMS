import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue';
import linkResolver from './prismic/link-resolver';
import dotenv from 'dotenv'

Vue.config.productionTip = false

const accessToken = process.env.VUE_APP_PRISMIC_TOKEN;
console.log(process.env);

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: { accessToken }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
