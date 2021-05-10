import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import request from 'common/request.js'
import SteamWebapi from 'steamworkers-webapi'
Vue.prototype.$request = request
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$steam = new SteamWebapi('D9BBFE5089DBA9B6F17B54A65D92AC0E');

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
