import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from 'vue-router'
import HomeVue from './components/Home.vue'
import DashboardVue from './components/Dashboard.vue'
import EditorVue from './components/Editor.vue'

const routes = [
    { path: '/', component: HomeVue },
    { path: '/dashboard/', component: DashboardVue },
    { path: '/editor/:id', component: EditorVue }
]

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes
    }))
    .mount('#app')
