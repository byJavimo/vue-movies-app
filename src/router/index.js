import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import MoviesList from '../views/MoviesList.vue'
import MovieDetail from '../views/MovieDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/peliculas',
        name: 'MoviesList',
        component: MoviesList
    },
    {
        path: '/pelicula/:id',
        name: 'MovieDetail',
        component: MovieDetail
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;