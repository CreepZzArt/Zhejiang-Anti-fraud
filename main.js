import App from './App'
import utils from "@/utils/index.js"
Vue.prototype.utils = utils

// #ifndef VUE3

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
// main.js
import uView from 'uview-ui';
Vue.use(uView);
import chinanVariable from './common/chinanVariable.js'
import commonApi from '@/static/js/all'
Vue.prototype.$variable = chinanVariable;
Vue.prototype.commonApi = commonApi;
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'