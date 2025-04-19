<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
              Ilm yo'lida <span class="text-emerald-600">birga</span>
            </h1>
            <p class="text-lg text-gray-700 mb-8">
              Islomiy bilimlarni o'rganish va o'rganishda sizga yordam berish uchun ishonchli manbalar va ma'lumotlar bilan ta'minlaymiz.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/about" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">
                Ko'proq bilish
              </router-link>
              <router-link to="/books" class="bg-white hover:bg-gray-100 text-emerald-700 border border-emerald-600 font-medium py-3 px-6 rounded-lg transition-colors text-center">
                Kitoblarni ko'rish
              </router-link>
            </div>
          </div>
          <div class="md:w-1/2">
            <img src="/placeholder.png?height=400&width=500" alt="Islamic Books" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Sections -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-emerald-800 mb-12">Bizning bo'limlar</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Fatvolar -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src="/placeholder.png?height=200&width=400" alt="Fatvolar" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-emerald-800 mb-2">Fatvolar</h3>
              <p class="text-gray-600 mb-4">Islomiy masalalar bo'yicha ishonchli fatvo va javoblar.</p>
              <router-link to="/fatvolar" class="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center">
                Ko'proq o'qish
                <ArrowRight class="ml-2 h-4 w-4" />
              </router-link>
            </div>
          </div>

          <!-- Tarjima Kitoblar -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src="/placeholder.png?height=200&width=400" alt="Tarjima Kitoblar" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-emerald-800 mb-2">Tarjima Kitoblar</h3>
              <p class="text-gray-600 mb-4">O'zbek tiliga tarjima qilingan qimmatli islomiy kitoblar.</p>
              <router-link to="/books" class="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center">
                Ko'proq o'qish
                <ArrowRight class="ml-2 h-4 w-4" />
              </router-link>
            </div>
          </div>

          <!-- Audio Books -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <img src="/placeholder.png?height=200&width=400" alt="Audio Kitoblar" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-emerald-800 mb-2">Audio Kitoblar</h3>
              <p class="text-gray-600 mb-4">Islomiy kitoblarning audio versiyalari.</p>
              <router-link to="/audio-books" class="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center">
                Ko'proq o'qish
                <ArrowRight class="ml-2 h-4 w-4" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Articles -->
    <section class="py-16 bg-emerald-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-emerald-800 mb-12">So'nggi maqolalar</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/placeholder.png?height=200&width=400" alt="Article" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="text-sm text-emerald-600 mb-2">{{ new Date().toLocaleDateString() }}</div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Islomiy maqola sarlavhasi {{ i }}</h3>
              <p class="text-gray-600 mb-4">Ushbu maqolada muhim islomiy mavzu haqida batafsil ma'lumot berilgan.</p>
              <router-link to="/articles/1" class="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center">
                To'liq o'qish
                <ArrowRight class="ml-2 h-4 w-4" />
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <router-link to="/articles" class="bg-white hover:bg-gray-100 text-emerald-700 border border-emerald-600 font-medium py-3 px-6 rounded-lg transition-colors inline-block">
            Barcha maqolalarni ko'rish
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
</script>