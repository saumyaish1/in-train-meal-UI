import Router from 'vue-router';
import AppHome from '@/components//AppHome.vue';
import AboutPage from '@/components/About.vue';
import RegisterPage from '@/components/Register.vue';
import MealMenu from '@/components/MealMenu.vue';
const router = new Router({
    mode: 'history', 
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'aboutUs', 
            path: '/about',
            component: AboutPage
        },
        {
            name: 'register',
            path: '/register',
            component: RegisterPage
        },
        {
            name: 'meals',
            path: '/meals',
            component: MealMenu
        }

    ]      
});

export default router;