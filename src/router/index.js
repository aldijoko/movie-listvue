import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PopularMovies from '../views/PopularMovies.vue';
import PopularTVShows from '../views/PopularTvShow.vue';
import MovieDetail from '../components/MovieDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/popular-movies',
            component: PopularMovies
        },
        {
            path: '/popular-tvshows',
            component: PopularTVShows
        },
        {
            path: '/detail/:id',
            component: MovieDetail,
            props: true
        },
        {
            path: '/detail-movie/:id',
            component: MovieDetail,
            props: true
        },
        {
            path: '/detail-tvshows/:id',
            component: MovieDetail,
            props: true
        }
    ]
});

export default router;
