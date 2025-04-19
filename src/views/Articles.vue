<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">Maqolalar</h1>

      <div class="max-w-4xl mx-auto mb-8">
        <p class="text-gray-700 text-center">
          Islomiy mavzulardagi qiziqarli va foydali maqolalar to'plami. Bu yerda siz turli mavzulardagi maqolalarni topishingiz mumkin.
        </p>
      </div>

      <!-- Search and Filter -->
      <div class="max-w-4xl mx-auto bg-emerald-50 p-4 rounded-lg mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <input
                type="text"
                placeholder="Maqola qidirish..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
              <option value="">Barcha kategoriyalar</option>
              <option value="aqida">Aqida</option>
              <option value="fiqh">Fiqh</option>
              <option value="tarix">Tarix</option>
              <option value="axloq">Axloq</option>
              <option value="oila">Oila</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Featured Article -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <div class="md:flex">
            <div class="md:w-2/5">
              <img src="/placeholder.svg?height=400&width=600" alt="Featured Article" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-3/5 p-6">
              <div class="text-sm text-emerald-600 mb-2">Kategoriya: Aqida</div>
              <h2 class="text-2xl font-bold text-emerald-800 mb-3">Imon asoslari: Islomda e'tiqod masalalari</h2>
              <p class="text-gray-700 mb-4 line-clamp-3">
                Islomda imon asoslari qanday? Allohga, farishtalariga, kitoblariga, payg'ambarlariga, oxirat kuniga va taqdir-qazoga ishonish haqida batafsil ma'lumot.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <Calendar class="h-4 w-4 mr-1" />
                <span>{{ new Date().toLocaleDateString() }}</span>
                <span class="mx-2">•</span>
                <User class="h-4 w-4 mr-1" />
                <span>Abdulaziz Mansur</span>
              </div>
              <router-link to="/articles/1" class="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                To'liq o'qish
                <ArrowRight class="ml-2 h-4 w-4" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="i in 6" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <router-link :to="`/articles/${i}`">
              <img src="/placeholder.svg?height=300&width=500" alt="Article" class="w-full h-48 object-cover" />
              <div class="p-4">
                <div class="text-xs text-emerald-600 mb-1">Kategoriya: Fiqh</div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Namoz o'qish tartibi: to'g'ri namoz o'qish yo'riqnomasi</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                  Namoz o'qishning to'g'ri tartibi, tahorat olishdan tortib namozni yakunlashgacha bo'lgan barcha bosqichlar haqida batafsil ma'lumot.
                </p>
                <div class="flex items-center text-xs text-gray-500">
                  <Calendar class="h-3 w-3 mr-1" />
                  <span>{{ new Date().toLocaleDateString() }}</span>
                  <span class="mx-2">•</span>
                  <User class="h-3 w-3 mr-1" />
                  <span>Abdulaziz Mansur</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8">
        <nav class="flex items-center space-x-2">
          <button class="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-emerald-50">
            <ChevronLeft class="h-5 w-5" />
          </button>
          <button class="px-3 py-1 rounded-md border border-emerald-600 bg-emerald-600 text-white">1</button>
          <button class="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-emerald-50">2</button>
          <button class="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-emerald-50">3</button>
          <button class="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-emerald-50">
            <ChevronRight class="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>