
import dashboard from './components/dashboard.vue';
import profile from './components/profile.vue';
import users from './components/users.vue';

export const routes = [
  { path: '/dashboard', component: dashboard },
  { path: '/profile', component: profile },
  { path: '/users', component: users }
]
