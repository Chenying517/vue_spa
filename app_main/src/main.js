import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

// step1: 注册应用：注册子应用，并将其挂载到当前项目
registerApplication('sxyd', // 注册的子应用名字
  async () => {
    console.log('加载三线一单模块')
    await loadScript('http://localhost:10002/js/chunk-vendors.js')
    await loadScript('http://localhost:10002/js/app.js')
    return window.sxyd

  },// 我要调用的加载方法：这个加载的方法要求是promise
  location => location.pathname.startsWith('/sxyd'), // 何时加载子应用：当url以sxyd开头是加载
)
// step2:开启应用
start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


