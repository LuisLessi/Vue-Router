import { createRouter, createWebHistory } from 'vue-router'
import ContatoEditar from '../views/Contatos/ContatoEditar.vue'
import ContatoDetalhes from '../views/Contatos/ContatoDetalhes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      name: 'contatos',
      alias: ['/meus-contatos', '/lista-de-contatos'],
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      },
      component: () => import('../views/Contatos/ContatosView.vue'),
      children: [
        {
          path: ':id(\\d+)',
          name: 'contatoDetalhes',
          props: route => ({
              id: route.params.id
          }),
          component: () => import('../views/Contatos/ContatoDetalhes.vue')
        },
        {
          //path: ':id(\\d+)/editar/:opcional?',
          //path: ':id(\\d+)/editar/:zeroOuMais*',
          path: ':id(\\d+)/editar/:umOuMais+',
          name: 'ContatoEditar',
          alias: ':id(\\d+)/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },
        {
          path: '',
          name: 'contatosHome',
          component: () => import('../views/Contatos/contatosHome.vue')
        },
        {
          path: '/contatos/:pathMatch(.*)', 
          component: () => import('../components/contatos/Error404Contatos.vue')
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
    {
      path: '/:pathMatch(.*)*', 
      component: () => import('../views/Error404.vue')
    },
  ]
})

export default router
