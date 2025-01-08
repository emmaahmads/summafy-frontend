import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import MyDocuments from '../components/MyDocuments.vue';
import UploadDocuments from '@/components/UploadDocuments.vue';
import LogoutPage from '@/components/LogoutPage.vue';
import SignupPage from '@/components/SignupPage.vue';

const routes = [
    { path: '/', name: 'Login', component: LoginPage },
    { path: '/signup', name: 'Signup', component: SignupPage },
    { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
    { path: '/documents', name: 'MyDocuments', component: MyDocuments },
    { path: '/upload', name: 'UploadDocuments', component: UploadDocuments },
    { path: '/logout', name: 'Logout', component: LogoutPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
