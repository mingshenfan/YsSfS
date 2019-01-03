import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios';
import VueResource from 'vue-resource'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Actionsheet } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Actionsheet.name, Actionsheet);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(VueResource)
 
Vue.use(ElementUI)
Vue.use(Router)
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/api";
new Vue({
    el: '#app',
    render: h => h(App)
})
export default new Router({
    // routes: [             
    //   {                    
    //     path: '/',        
    //     name: 'Hello',     
    //     component: Hello,   
    //   },{
    //     path:'/hi',
    //     component:Hi,
    //     children:[
    //       {path:'/',component:Hi},
    //       {path:'hi1',component:Hi1},
    //       {path:'hi2',component:Hi2},
    //     ]
    //   }
    // ]
  })