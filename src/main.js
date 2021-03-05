import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Resources from './components/Learning/Resources.vue'
import BaseCard from './components/Ui/BaseCard.vue'
import ButtonTitle from './components/Ui/ButtonTitle.vue'
import ButtonDelete from './components/Ui/ButtonDelete.vue'
import Headers from './components/Ui/Headers.vue'
import Form from './components/Learning/Form.vue'


Vue.config.productionTip = false;
Vue.component("resources-component", Resources);
Vue.component('card-component', BaseCard);
Vue.component('button-component', ButtonTitle);
Vue.component('delete-component', ButtonDelete);
Vue.component('header-tag', Headers)
Vue.component('form-component', Form)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
