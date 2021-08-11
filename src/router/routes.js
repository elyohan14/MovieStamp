
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue')
  },
  {
    path: '/menu',
    component: () => import('layouts/Menu.vue'),
    children: [
      { path: '/movies', component: () => import('src/pages/Movies.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
