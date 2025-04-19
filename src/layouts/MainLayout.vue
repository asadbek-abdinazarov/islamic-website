<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <router-link to="/" class="flex items-center">
            <BookOpenText class="h-8 w-8 text-emerald-600" />
            <span class="ml-2 text-xl font-semibold text-emerald-800">IslamicHub</span>
          </router-link>

          <div class="hidden md:flex space-x-8">
            <router-link
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                :class="{ 'text-emerald-600': isActive(item.path) }"
            >
              {{ item.name }}
            </router-link>
          </div>

          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6 text-gray-700" />
            <X v-else class="h-6 w-6 text-gray-700" />
          </button>
        </nav>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 space-y-2">
          <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="block py-2 text-gray-700 hover:text-emerald-600 font-medium"
              :class="{ 'text-emerald-600': isActive(item.path) }"
              @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-emerald-50 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <BookOpenText class="h-6 w-6 text-emerald-600" />
            <span class="ml-2 text-lg font-semibold text-emerald-800">IslamicHub</span>
          </div>

          <div class="flex space-x-4">
            <a href="#" class="text-emerald-700 hover:text-emerald-900">
              <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="text-emerald-700 hover:text-emerald-900">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-emerald-700 hover:text-emerald-900">
              <Instagram class="h-5 w-5" />
            </a>
            <a href="#" class="text-emerald-700 hover:text-emerald-900">
              <Youtube class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div class="mt-6 text-center text-gray-600 text-sm">
          <p>© {{ new Date().getFullYear() }} IslamicHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { BookOpenText, Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-vue-next';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'About Me', path: '/about' },
  { name: 'Fatvolar', path: '/fatvolar' },
  { name: 'Tarjima Kitoblar', path: '/books' },
  { name: 'Articles', path: '/articles' },
  { name: 'Audio Books', path: '/audio-books' }
];

const isActive = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`);
};
</script>