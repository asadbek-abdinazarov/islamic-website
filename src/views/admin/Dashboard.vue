<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Boshqaruv paneli</h1>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-emerald-100 text-emerald-600 mr-4">
            <BookOpen class="h-6 w-6" />
          </div>
          <div>
            <div class="text-sm text-gray-500">Jami kitoblar</div>
            <div class="text-2xl font-bold text-gray-800">24</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-emerald-100 text-emerald-600 mr-4">
            <FileText class="h-6 w-6" />
          </div>
          <div>
            <div class="text-sm text-gray-500">Jami maqolalar</div>
            <div class="text-2xl font-bold text-gray-800">36</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-emerald-100 text-emerald-600 mr-4">
            <Headphones class="h-6 w-6" />
          </div>
          <div>
            <div class="text-sm text-gray-500">Audio kitoblar</div>
            <div class="text-2xl font-bold text-gray-800">12</div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-emerald-100 text-emerald-600 mr-4">
            <Users class="h-6 w-6" />
          </div>
          <div>
            <div class="text-sm text-gray-500">Tashrif buyuruvchilar</div>
            <div class="text-2xl font-bold text-gray-800">1,254</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">So'nggi faoliyat</h2>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div v-for="i in 5" :key="i" class="flex items-start">
            <div class="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mr-4">
              <FileText v-if="i % 3 === 0" class="h-5 w-5" />
              <BookOpen v-else-if="i % 3 === 1" class="h-5 w-5" />
              <Headphones v-else class="h-5 w-5" />
            </div>
            <div>
              <p class="text-gray-800 font-medium">
                <span v-if="i % 3 === 0">Yangi maqola qo'shildi</span>
                <span v-else-if="i % 3 === 1">Yangi kitob qo'shildi</span>
                <span v-else>Yangi audio kitob qo'shildi</span>
              </p>
              <p class="text-gray-600 text-sm">
                <span v-if="i % 3 === 0">Islomda axloq-odob qoidalari</span>
                <span v-else-if="i % 3 === 1">Sahihi Buxoriy {{ i }}-jild</span>
                <span v-else>Qur'oni Karim (Audio)</span>
              </p>
              <p class="text-gray-500 text-xs mt-1">{{ new Date().toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions and Recent Items -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Quick Actions -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-800">Tezkor amallar</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button class="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <div class="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                <FileText class="h-5 w-5" />
              </div>
              <span class="font-medium text-gray-800">Yangi maqola</span>
            </button>

            <button class="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <div class="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                <BookOpen class="h-5 w-5" />
              </div>
              <span class="font-medium text-gray-800">Yangi kitob</span>
            </button>

            <button class="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <div class="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                <Headphones class="h-5 w-5" />
              </div>
              <span class="font-medium text-gray-800">Yangi audio</span>
            </button>

            <button class="flex items-center p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <div class="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                <Settings class="h-5 w-5" />
              </div>
              <span class="font-medium text-gray-800">Sozlamalar</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Recent Items -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-800">So'nggi qo'shilgan</h2>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div v-for="i in 4" :key="i" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <div class="p-2 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                  <FileText v-if="i % 2 === 0" class="h-5 w-5" />
                  <BookOpen v-else class="h-5 w-5" />
                </div>
                <div>
                  <p class="font-medium text-gray-800">
                    <span v-if="i % 2 === 0">Islomda axloq-odob qoidalari</span>
                    <span v-else>Sahihi Buxoriy {{ i }}-jild</span>
                  </p>
                  <p class="text-xs text-gray-500">{{ new Date().toLocaleDateString() }}</p>
                </div>
              </div>
              <button class="text-emerald-600 hover:text-emerald-800">
                <Edit class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, FileText, Headphones, Users, Edit, Settings } from 'lucide-vue-next';
</script>