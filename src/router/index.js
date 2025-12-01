import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/filmes',
    name: 'Movies',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/tv',
    name: 'TV',
    component: () => import('../views/TvView.vue'),
  },
  {
  path: "/movie/:id",
  name: "MovieDetails",
  component: () => import("../views/MovieDetailsView.vue")
  }
,{
  path: '/tv/:id',
  name: 'tvDetails',
  component: () => import('../views/TvDetails.vue')

},
{
  path: "/favoritos",
  name: "Favorites",
  component: () => import("../views/FavoritesView.vue")
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
