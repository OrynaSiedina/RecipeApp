import {createRouter, createWebHistory} from 'vue-router'
import {Home, About, Recipes, Download, Contact} from '../views'
import MealDetails from '../views/MealDetails.vue'
import MealsByLetter from '../components/MealsByLetter.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes,
    children: [
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      }
    ]
  },
  {
    path: '/download',
    name: 'download',
    component: Download
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/meal/:id',
    name: 'mealDetails',
    component: MealDetails
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router