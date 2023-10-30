import {createRouter, createWebHistory} from 'vue-router'
import {Home, About, Recipes, Download, Contact} from '../views'
import MealDetails from '../views/MealDetails.vue'
import MealsByLetter from '../components/MealsByLetter.vue'
import MealsByIngredient from "../components/MealsByIngredient.vue";
import Ingredients from "../components/Ingredients.vue";
import MealsByName from "../components/MealsByName.vue";

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
    redirect: {name: 'byName'},
    children: [
      {
        path: 'by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },{
        path: 'by-name/:name?',
        name: 'byName',
        component: MealsByName,
      },
      {
        path: "ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
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