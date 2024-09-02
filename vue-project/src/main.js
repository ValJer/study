import './assets/main.css'
// Import all of Bootstrap's JS

// Import our custom CSS
import './scss/styles.scss'

import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
