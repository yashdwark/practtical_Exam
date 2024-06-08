// Import necessary modules from Vue Router
import { createMemoryHistory, createRouter } from 'vue-router';

// Import your component
import HomePage from './src/components/HomePage.vue';

// Define the routes for your application
const routes = [
  {
    path: '/',
    component: HomePage
  },
];

// Create the router instance and pass the routes and history type
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
