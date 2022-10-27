import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/router/permission'

import '@/styles/app.scss'
import 'vant/lib/index.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
