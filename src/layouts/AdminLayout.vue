<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside :class="[
      'bg-emerald-800 text-white w-64 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]">
      <div class="flex items-center justify-between h-16 px-4 border-b border-emerald-700">
        <div class="flex items-center">
          <BookOpenText class="h-6 w-6 text-white" />
          <span class="ml-2 font-semibold">Admin Panel</span>
        </div>
        <button @click="toggleSidebar" class="md:hidden">
          <X class="h-5 w-5" />
        </button>
      </div>

      <nav class="mt-5 px-2">
        <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="group flex items-center px-2 py-2 text-sm font-medium rounded-md mb-1"
            :class="[
            isActive(item.path)
              ? 'bg-emerald-700 text-white'
              : 'text-emerald-100 hover:bg-emerald-700'
          ]"
        >
          <component :is="item.icon" class="mr-3 h-5 w-5" />
          {{ item.name }}
        </router-link>
      </nav>

      <div class="absolute bottom-0 w-full border-t border-emerald-700 p-4">
        <router-link to="/" class="flex items-center text-sm text-emerald-100 hover:text-white">
          <ExternalLink class="mr-2 h-4 w-4" />
          View Website
        </router-link>
        <button @click="logout" class="mt-2 flex items-center text-sm text-emerald-100 hover:text-white">
          <LogOut class="mr-2 h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <div :class="[
      'flex-1 flex flex-col transition-all duration-300 ease-in-out',
      isSidebarOpen ? 'md:ml-64' : ''
    ]">
      <header class="bg-white shadow-sm z-10">
        <div class="flex items-center justify-between h-16 px-4">
          <button @click="toggleSidebar" class="md:hidden text-gray-600">
            <Menu class="h-6 w-6" />
          </button>
          <div class="flex items-center">
            <span class="text-sm text-gray-600 mr-2">Welcome, Admin</span>
            <div class="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <User class="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
        <slot />
      </main>
    </div>

    <!-- Overlay -->
    <div
        v-if="isSidebarOpen"
        @click="toggleSidebar"
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  BookOpenText, Menu, X, User, LogOut, ExternalLink,
  Home, User as UserIcon, BookOpen, FileText, Headphones, Settings
} from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const isSidebarOpen = ref(false);
const sidebarTranslateX = ref('');

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: Home },
  { name: 'About Me', path: '/admin/about', icon: UserIcon },
  { name: 'Fatvolar', path: '/admin/fatvolar', icon: BookOpen },
  { name: 'Tarjima Kitoblar', path: '/admin/books', icon: BookOpen },
  { name: 'Articles', path: '/admin/articles', icon: FileText },
  { name: 'Audio Books', path: '/admin/audio-books', icon: Headphones },
  { name: 'Settings', path: '/admin/settings', icon: Settings }
];

const isActive = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`) && path !== '/admin';
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  sidebarTranslateX.value = isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full md:translate-x-0';
};

const logout = () => {
  router.push('/login');
};

onMounted(() => {
  sidebarTranslateX.value = isSidebarOpen.value ? 'translate-x-0' : '-translate-x-full md:translate-x-0';
});
</script>