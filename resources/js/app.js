import { createApp } from 'vue'
import router from './router'

require('./bootstrap')

createApp({ template: '<router-view />' }).use(router).mount('#app');