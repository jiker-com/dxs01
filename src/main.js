import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// 引入路由
import router from './router'

// import './assets/main.css'
import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
// 使用路由
app.use(router)

app.mount('#app')
