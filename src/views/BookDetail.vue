<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Book Cover -->
          <div class="md:w-1/3">
            <div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src="/placeholder.svg?height=500&width=350" alt="Book Cover" class="w-full h-auto" />
            </div>
          </div>

          <!-- Book Details -->
          <div class="md:w-2/3">
            <div class="text-sm text-emerald-600 mb-2">Kategoriya: Hadis</div>
            <h1 class="text-3xl font-bold text-emerald-800 mb-4">Sahihi Buxoriy 1-jild</h1>

            <div class="flex items-center mb-4">
              <div class="flex items-center mr-4">
                <User class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">Imom Buxoriy</span>
              </div>
              <div class="flex items-center mr-4">
                <Calendar class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">2020</span>
              </div>
              <div class="flex items-center">
                <BookOpen class="h-4 w-4 text-gray-500 mr-1" />
                <span class="text-gray-700">532 bet</span>
              </div>
            </div>

            <div class="bg-emerald-50 p-4 rounded-lg mb-6">
              <h3 class="font-bold text-emerald-800 mb-2">Qisqacha ma'lumot:</h3>
              <p class="text-gray-700">
                "Sahihi Buxoriy" - Imom Muhammad ibn Ismoil al-Buxoriy tomonidan to'plangan hadislar to'plami. Bu to'plam Islom olamida eng ishonchli hadis to'plamlaridan biri hisoblanadi. Ushbu kitobda Payg'ambarimiz Muhammad (s.a.v.)ning so'zlari, amallari va tasdiqlarini o'z ichiga olgan hadislar jamlangan. Kitob imon, namoz, ro'za, zakot, haj kabi islomiy amallar va axloq-odob qoidalari haqidagi hadislarni o'z ichiga oladi.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <button class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <Download class="h-5 w-5 mr-2" />
                Yuklab olish (PDF)
              </button>
              <button class="bg-white hover:bg-gray-100 text-emerald-700 border border-emerald-600 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <Share2 class="h-5 w-5 mr-2" />
                Ulashish
              </button>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-xl font-bold text-emerald-800 mb-4">Mundarija</h3>
              <div class="space-y-3">
                <div v-for="i in 5" :key="i" class="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                  <span class="font-medium">{{ i }}. Bob: Vahiy haqida</span>
                  <ChevronRight class="h-5 w-5 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Book Description -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-emerald-800 mb-6">Kitob haqida batafsil</h2>

          <div class="prose max-w-none text-gray-700">
            <p class="mb-4">
              "Sahihi Buxoriy" - Imom Muhammad ibn Ismoil al-Buxoriy (810-870) tomonidan to'plangan hadislar to'plami bo'lib, u Islom olamida eng ishonchli hadis to'plamlaridan biri hisoblanadi. Imom Buxoriy bu to'plamni tuzish uchun 16 yil davomida 600,000 dan ortiq hadislarni o'rganib chiqib, ulardan eng ishonchli deb topilgan 7,275 hadisni kitobga kiritgan.
            </p>

            <p class="mb-4">
              Kitob "al-Jome' as-Sahih" (To'g'ri to'plam) deb ham ataladi va u Qur'oni Karimdan keyin Islom dinida eng ishonchli manba hisoblanadi. Hadislar mavzular bo'yicha tartibga solingan bo'lib, imon, namoz, ro'za, zakot, haj kabi islomiy amallar va axloq-odob qoidalari haqidagi hadislarni o'z ichiga oladi.
            </p>

            <p class="mb-4">
              Ushbu tarjima Abdulaziz Mansur tomonidan o'zbek tiliga o'girilgan bo'lib, asl matnning ma'nosini saqlab qolgan holda, zamonaviy o'zbek kitobxonlari uchun tushunarli tilda taqdim etilgan. Tarjima jarayonida arab tilidagi atamalar va iboralarning ma'nosi izohlar bilan to'ldirilgan.
            </p>

            <p>
              Kitob barcha musulmonlar, islomiy ilmlar tadqiqotchilari va umuman Islom dini bilan qiziquvchilar uchun qimmatli manba bo'lib xizmat qiladi.
            </p>
          </div>
        </div>

        <!-- Related Books -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-emerald-800 mb-6">O'xshash kitoblar</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="i in 4" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <router-link :to="`/books/${i+1}`">
                <img src="/placeholder.png?height=300&width=200" alt="Book Cover" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-1">Sahihi Buxoriy {{ i+1 }}-jild</h3>
                  <div class="text-sm text-gray-600">Imom Buxoriy</div>
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
import { User, Calendar, BookOpen, Download, Share2, ChevronRight } from 'lucide-vue-next';
</script>