import { createRouter, createWebHistory } from 'vue-router'

//Import my core components
import Home from './Home.vue'
import Gallery from './Gallery.vue'
import Catalogue from './Catalogue.vue'
//..... add more later once template has been finalized

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/gallery', name: 'Gallery', component: Gallery},
    {path: '/catalogue', name: 'Catalogue', component: Catalogue}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router