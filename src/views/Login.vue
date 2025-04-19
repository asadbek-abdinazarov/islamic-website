<template>
  <div class="min-h-screen flex items-center justify-center bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div>
        <div class="flex justify-center">
          <BookOpenText class="h-12 w-12 text-emerald-600" />
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold text-emerald-800">Admin paneliga kirish</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Saytni boshqarish uchun tizimga kiring
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email manzil</label>
            <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                placeholder="Email manzil"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Parol</label>
            <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                placeholder="Parol"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Meni eslab qolish
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-emerald-600 hover:text-emerald-500">
              Parolni unutdingizmi?
            </a>
          </div>
        </div>

        <div>
          <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Lock class="h-5 w-5 text-emerald-500 group-hover:text-emerald-400" />
            </span>
            Kirish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { BookOpenText, Lock } from 'lucide-vue-next';

const router = useRouter();
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const login = () => {
  // In a real application, you would validate credentials with your backend
  // For demo purposes, we'll just set a flag in localStorage
  localStorage.setItem('isAuthenticated', 'true');
  router.push('/admin');
};
</script>