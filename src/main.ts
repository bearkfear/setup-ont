import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { createRouter, createWebHashHistory } from "vue-router";
import AuthorizeRoute from "./views/AuthorizeRoute.vue";
import RevogueRoute from "./views/RevogueRoute.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/authorize", component: AuthorizeRoute },
  { path: "/revogue", component: RevogueRoute },
  { path: "/", component: AuthorizeRoute },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.

// Make sure to _use_ the router instance to make the
// whole app router-aware.

const app = createApp(App);
app.use(router);
app.mount("#app");
