//js
import 'babel-polyfill'//解决IE兼容问题
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/';
import filters from './filters/index.js';
import directives from '@/directives/index.js';
import VueI18n from 'vue-i18n'; //多语言
import messages from '@/lang/index';
import App from './App'

//css
import '../static/css/reset.css'
import '../static/css/element-ui.css'
// import '../static/css/iconfont.css'

//less
import "./less/index.less"

Vue.use(ElementUI);
Vue.use (VueI18n);

router.beforeEach((to, from, next) => {

    if(false) {
        next({
            path: '/index',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
});

const browserLanguage = (navigator.language || navigator.browserLanguage)
    .toLowerCase (),
    i18n = new VueI18n ({
        //定义默认语言
        locale: browserLanguage,
        messages,
    });


//Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    router,
    store,
    i18n,
    //组件
    components: {
    },
    render: h => h(App)
});