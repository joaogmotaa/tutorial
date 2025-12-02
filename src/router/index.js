import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import MoviesView from '@/views/MoviesView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'
import TvView from '@/views/TvView.vue'
import TvDetails from '@/views/TvDetails.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesView
  },
  {
  path: '/movie/:id',
  name: 'MovieDetails',
  component: () => import('@/views/MovieDetailsView.vue'),
  props: true
}
,
  {
    path: '/tv',
    name: 'Tv',
    component: TvView
  },
  {
    path: '/tv/:id',
    name: 'TvDetails',
    component: TvDetails,
    props: true
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesView
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
