import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Fatvolar from '@/views/Fatvolar.vue';
import Books from '@/views/Books.vue';
import BookDetail from '@/views/BookDetail.vue';
import Articles from '@/views/Articles.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import AudioBooks from '@/views/AudioBooks.vue';
import AudioBookDetail from '@/views/AudioBookDetail.vue';
import Login from '@/views/Login.vue';

// Admin views
import AdminDashboard from '@/views/admin/Dashboard.vue';
import AdminAbout from '@/views/admin/AboutManager.vue';
import AdminFatvolar from '@/views/admin/FatvolarManager.vue';
import AdminBooks from '@/views/admin/BookManager.vue';
import AdminArticles from '@/views/admin/ArticleManager.vue';
import AdminAudioBooks from '@/views/admin/AudioBooksManager.vue';
import AdminSettings from '@/views/admin/Settings.vue';

// Auth guard
const requireAuth = (to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
        next();
    } else {
        next('/login');
    }
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/fatvolar',
        name: 'Fatvolar',
        component: Fatvolar
    },
    {
        path: '/books',
        name: 'Books',
        component: Books
    },
    {
        path: '/books/:id',
        name: 'BookDetail',
        component: BookDetail
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    },
    {
        path: '/articles/:id',
        name: 'ArticleDetail',
        component: ArticleDetail
    },
    {
        path: '/audio-books',
        name: 'AudioBooks',
        component: AudioBooks
    },
    {
        path: '/audio-books/:id',
        name: 'AudioBookDetail',
        component: AudioBookDetail
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/about',
        name: 'AdminAbout',
        component: AdminAbout,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/fatvolar',
        name: 'AdminFatvolar',
        component: AdminFatvolar,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/books',
        name: 'AdminBooks',
        component: AdminBooks,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/articles',
        name: 'AdminArticles',
        component: AdminArticles,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/audio-books',
        name: 'AdminAudioBooks',
        component: AdminAudioBooks,
        beforeEnter: requireAuth
    },
    {
        path: '/admin/settings',
        name: 'AdminSettings',
        component: AdminSettings,
        beforeEnter: requireAuth
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0};
    }
});

export default router;