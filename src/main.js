import App from './App.vue'
import { createApp } from "vue"
import { createRouter, createWebHistory } from 'vue-router'


//Dinh nghia compentents
import HomePage from './pages/home-page.vue'
import Login from './pages/login-page.vue'
import ChiTiet from './pages/chi-tiet.vue'
import TimKiem from './pages/tim-kiem.vue'
import Paginate from 'vuejs-paginate-next'


// 2. Define some routes

const routes = [
    { path: '/', component: HomePage },
    { path: '/dang-nhap', component: Login },
    { path: '/chi-tiet/:id',component: ChiTiet},
    { path: '/tim-kiem', component: TimKiem}
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
const app = createApp(App);
app.use(Paginate)

app.use(router)
app.mount('#app')

