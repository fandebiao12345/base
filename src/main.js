import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import conf from './config'
Vue.config.productionTip = false
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config) => {
  console.log(config.headers.referer)
  return config
})

// window.a = 1
const util = {
  axiosInstance,
  router
}

const utilProxy = new Proxy(util, {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    return true
  }
})

Vue.prototype.$util = utilProxy


import { registerMicroApps, start, initGlobalState } from 'qiankun';


const microConf = conf.map(item => {
  const env = process.env.NODE_ENV
  console.log(env)
  return {
    ...item,
    entry: env === 'development' ? item.devEntry : item.prodEntry,
    props: {
      util
    }
  }
})

registerMicroApps(microConf);

start({
  sandbox: false
});

const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach(entry => {
    console.log(entry)
    if (entry.entryType === 'paint') {
      if (entry.name === 'first-contentful-paint') {
        console.log('首次内容绘制时间（First Contentful Paint）:', entry.startTime);
      } else if (entry.name === 'first-paint') {
        console.log('白屏时间（First Paint）:', entry.startTime);
      }
    }
  });
});

// 开始监听页面性能
observer.observe({ entryTypes: ['paint'] });


const state = {}
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
});

Vue.prototype.$action = actions

actions.setGlobalState(state);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log()