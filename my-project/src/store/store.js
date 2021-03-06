import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import count from './modules/index.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        count,
    },
    plugins: [createLogger()]
})