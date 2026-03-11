import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountsView from '../views/AccountsView.vue'
import ArticleDetails from '@/views/ArticleDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { 
      path: "/accounts",
      name: "accounts", 
      component: AccountsView 
    },
    {
      path: "/articles/:id",
      name: "articleDetails",
      component: ArticleDetails
    }
  ],
})

export default router
