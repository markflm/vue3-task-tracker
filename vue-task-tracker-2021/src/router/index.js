import {createRouter, createWebHistory} from 'vue-router'
import Info from '../views/Info.vue'

const routes = [
    {
        path: '/info',
        name: 'Info',
        component: Info
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})


export default router;