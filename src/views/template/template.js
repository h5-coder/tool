//css
import '@/../static/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';

//less
import '@/less/index.less';

//js
import Vue from 'vue';
import filters from '@/filters/index.js'; //过滤器
import VueI18n from 'vue-i18n'; //多语言
import messages from '@/lang/index';
import apiService from '@/services/API-service';
import ElementUI from 'element-ui'

Vue.use(ElementUI);
Vue.use(VueI18n);

const browserLanguage = (navigator.language || navigator.browserLanguage)
  .toLowerCase (),
  i18n = new VueI18n ({
    //定义默认语言
    locale: browserLanguage,
    messages,
  });

window.vueVM = new Vue ({
  i18n,
  render: h => h (App),
}).$mount ('#app');
