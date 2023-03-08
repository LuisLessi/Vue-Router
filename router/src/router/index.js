import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      name: 'contatos',
      component: () => import('../views/Contatos/ContatosView.vue'),
      children: [
        {
          path: ':id',
          name: 'contatoDetalhes',
          component: () => import('../views/Contatos/ContatoDetalhes.vue')
        },
        {
          path: ':id/editar',
          name: 'ContatoEditar',
          component: () => import('../views/Contatos/ContatoEditar.vue')
        },
        {
          path: '',
          name: 'contatosHome',
          component: () => import('../views/Contatos/contatosHome.vue')
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/',
      redirect: '/contatos'
    },
  ]
})

export default router
