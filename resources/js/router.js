import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Main from './components/docs/9x/Main.vue'

const routes = [
    { path: '/', name: 'app', component: App },
    { path: '/test', name: 'test', component: Main },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router