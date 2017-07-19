import Vue from 'vue';
import VueResource from 'vue-resource';
import { mapState } from 'vuex';

import Spinner from './components/common/Spinner.vue';
import Toast from './components/common/Toast.vue';

import store from './store';
import router from './router';

import './style/index.less';

Vue.use(VueResource);

Vue.filter('toDate', (value) => {
  if (typeof value === 'number' && !isNaN(value)) {
    const time = new Date(value);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    return `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
  }
  return '2000-01-01';
});

new Vue({
  store,
  router,
  components: {
    Spinner,
    Toast
  },
  computed: mapState(['isLoading', 'isToasting'])
}).$mount('#blog');
