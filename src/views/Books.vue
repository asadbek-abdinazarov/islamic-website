<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">Tarjima Kitoblar</h1>

      <div class="max-w-4xl mx-auto mb-8">
        <p class="text-gray-700 text-center">
          O'zbek tiliga tarjima qilingan qimmatli islomiy kitoblar to'plami. Bu yerda siz Qur'on, hadis, fiqh va boshqa islomiy mavzulardagi kitoblarni topishingiz mumkin.
        </p>
      </div>

      <!-- Search and Filter -->
      <div class="max-w-4xl mx-auto bg-emerald-50 p-4 rounded-lg mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow">
            <input
                type="text"
                placeholder="Kitob qidirish..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
              <option value="">Barcha kategoriyalar</option>
              <option value="quron">Qur'on</option>
              <option value="hadis">Hadis</option>
              <option value="fiqh">Fiqh</option>
              <option value="tarix">Tarix</option>
              <option value="tasavvuf">Tasavvuf</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Books Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <router-link :to="`/books/${i}`">
            <img src="/placeholder.png?height=300&width=200" alt="Book Cover" class="w-full h-64 object-cover" />
            <div class="p-4">
              <div class="text-xs text-emerald-600 mb-1">Kategoriya: Hadis</div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">Sahihi Buxoriy {{ i }}-jild</h3>
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                Imom Buxoriy tomonidan to'plangan ishonchli hadislar to'plami. Islom olamida eng ishonchli hadis to'plamlaridan biri hisoblanadi.
              </p>
              <div class="flex items-center justify-between">
                <div class="text-emerald-700 font-bold">Bepul</div>
                <div class="text-sm text-gray-500">2020</div>
              </div>
            </div>
          </router-link>
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
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>