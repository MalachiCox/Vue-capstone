import { createRouter, createWebHistory } from "vue-router";
import AnimePage from '../pages/AnimePage.vue'
import CharacterPage from '../pages/CharacterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // page for welcome
      path: "/",
      name: "home",
      component: AnimePage,
      meta: {
        title: "Anime Page",
      },
    },
    {
      path: "/character",
      name: "character",
      component: CharacterPage,
      meta: {
        title: "Character Page",
      },
    },
    ],
});

export default router;