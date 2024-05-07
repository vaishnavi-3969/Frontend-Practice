import HomePage from './components/HomePage.vue';
import AboutPage from './components/About.vue';
import LoginPage from './components/Login.vue';
import ContactPage from './components/Contact.vue';


export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/blog/:id',
        component: () => import('@/components/Blog.vue')
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/contact',
        component: ContactPage,
    },
    {
        path: '/services',
        component: () => import('@/components/Service.vue')
    },
    {
        path: '/blog',
        component: () => import('@/components/Blog.vue')
    },
]








