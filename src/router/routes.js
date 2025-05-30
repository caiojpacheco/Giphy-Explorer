// src/router/routes.js
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'), // Layout principal
    children: [
      {
        path: '', // Rota vazia para o path principal '/', que é a Home
        name: 'home', // Nome da rota para referência no menu
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'favorites',
        name: 'favorites',
        component: () => import('pages/FavoritesPage.vue'),
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('pages/CategoriesPage.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
    ],
  },

  // Rota padrão para 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
