<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Audio Book Cover -->
          <div class="md:w-1/3">
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.png?height=500&width=350" alt="Audio Book Cover" class="w-full h-auto" />
            </div>
          </div>

          <!-- Audio Book Details -->
          <div class="md:w-2/3">
            <div class="text-sm text-emerald-600 mb-2">Kategoriya: Qur'on</div>
            <h1 class="text-3xl font-bold text-emerald-800 mb-4">Qur'oni Karim (O'zbek tilida audio)</h1>

            <div class="flex items-center mb-4">
              <div class="flex items-center mr-4">
                <User class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">Qori: Abdulbosit Abdussomad</span>
              </div>
              <div class="flex items-center mr-4">
                <Calendar class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">2020</span>
              </div>
              <div class="flex items-center">
                <Clock class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">24 soat</span>
              </div>
            </div>

            <div class="bg-emerald-50 p-4 rounded-lg mb-6">
              <h3 class="font-bold text-emerald-800 mb-2">Qisqacha ma'lumot:</h3>
              <p class="text-gray-700">
                Qur'oni Karimning o'zbek tilidagi audio versiyasi. Professional qorilar tomonidan o'qilgan. Bu audio kitob orqali siz Qur'oni Karimni tinglashingiz va o'rganishingiz mumkin. Audio sifatli ovoz yozish studiyasida yozilgan bo'lib, tiniq va aniq ovozda taqdim etilgan.
              </p>
            </div>

            <!-- Audio Player -->
            <div class="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <div class="mb-4">
                <h3 class="font-bold text-emerald-800 mb-2">Hozir tinglanyapti:</h3>
                <p class="text-gray-700">Fotiha surasi</p>
              </div>

              <div class="mb-4">
                <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-600 rounded-full" style="width: 30%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1:30</span>
                  <span>5:00</span>
                </div>
              </div>

              <div class="flex items-center justify-center space-x-4">
                <button class="text-gray-700 hover:text-emerald-600">
                  <SkipBack class="h-6 w-6" />
                </button>
                <button class="bg-emerald-600 text-white rounded-full p-2 hover:bg-emerald-700">
                  <Play class="h-6 w-6" />
                </button>
                <button class="text-gray-700 hover:text-emerald-600">
                  <SkipForward class="h-6 w-6" />
                </button>
                <button class="text-gray-700 hover:text-emerald-600">
                  <Volume2 class="h-6 w-6" />
                </button>
                <input type="range" min="0" max="100" value="80" class="w-24" />
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <button class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <Download class="h-5 w-5 mr-2" />
                Yuklab olish (MP3)
              </button>
              <button class="bg-white hover:bg-gray-100 text-emerald-700 border border-emerald-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <Share2 class="h-5 w-5 mr-2" />
                Ulashish
              </button>
            </div>
          </div>
        </div>

        <!-- Chapters List -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-emerald-800 mb-6">Suralar ro'yxati</h2>

          <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div class="divide-y divide-gray-200">
              <div v-for="i in 10" :key="i" class="p-4 hover:bg-emerald-50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold mr-3">
                      {{ i }}
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-800">{{ i }}. Fotiha surasi</h3>
                      <div class="text-sm text-gray-500">Davomiyligi: 5:00</div>
                    </div>
                  </div>
                  <button class="text-emerald-600 hover:text-emerald-800">
                    <Play class="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Audio Books -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-emerald-800 mb-6">O'xshash audio kitoblar</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="i in 4" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <router-link :to="`/audio-books/${i+1}`">
                <img src="/placeholder.png?height=300&width=200" alt="Audio Book Cover" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-1">Sahihi Buxoriy (Audio)</h3>
                  <div class="text-sm text-gray-600">Qori: Ahmad Qori</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Calendar, Clock, Download, Share2, Play, SkipBack, SkipForward, Volume2 } from 'lucide-vue-next';
</script>