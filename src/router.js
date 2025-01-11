import { createRouter, createWebHistory } from "vue-router";
import Worlds from "./components/Worlds.vue";
import Detail from "./components/Detail.vue";
import AboutMe from "./components/AboutMe.vue";

const routes = [
  {
    path: "/",
    component: Worlds,
  },
  {
    path: "/world/:id",
    component: Detail,
    props: (route) => ({ id: route.params.id }), // Pasa `id` como prop al componente Detail
  },
  {
    path: "/about",
    component: AboutMe,
  },
  {
    path: "/:catchAll(.*)", // Ruta para manejar páginas no encontradas
    redirect: "/", // Redirige al inicio
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
