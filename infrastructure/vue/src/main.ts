import { createApp } from "vue"
import "./style.css"
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import UsersPage from "./pages/Users.vue";
import HomePage from "./pages/Home.vue";

const routes = [
  {
    path: "/users",
    component: UsersPage
  },
  {
    path: "/:*",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App)

app.use(router);

app.mount("#app");
