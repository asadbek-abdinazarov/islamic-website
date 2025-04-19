<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">Fatvolar</h1>

        <div class="mb-8">
          <p class="text-gray-700 text-center max-w-2xl mx-auto">
            Ushbu bo'limda islomiy masalalar bo'yicha ishonchli fatvo va javoblarni topishingiz mumkin. Barcha fatvolar Qur'on va Sunnatga asoslangan.
          </p>
        </div>

        <!-- Search and Filter -->
        <div class="bg-emerald-50 p-4 rounded-lg mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-grow">
              <input
                  type="text"
                  placeholder="Fatvo qidirish..."
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                <option value="">Barcha kategoriyalar</option>
                <option value="namoz">Namoz</option>
                <option value="ro'za">Ro'za</option>
                <option value="zakot">Zakot</option>
                <option value="haj">Haj</option>
                <option value="oila">Oila</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Fatvolar List -->
        <div class="space-y-6">
          <div v-for="i in 5" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div class="p-6">
              <div class="flex items-start">
                <div class="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <BookOpen class="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-emerald-800 mb-2">Namoz vaqtlari haqida savol</h3>
                  <div class="text-sm text-emerald-600 mb-3">Kategoriya: Namoz</div>
                  <p class="text-gray-700 mb-4">
                    Assalomu alaykum, men ishxonamda namoz o'qish imkoniyati yo'q. Namozlarni jam qilib o'qisam bo'ladimi?
                  </p>

                  <div class="bg-emerald-50 p-4 rounded-lg mb-4">
                    <div class="flex items-start">
                      <div class="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mr-3">
                        <User class="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 class="font-bold text-emerald-800 mb-2">Javob:</h4>
                        <p class="text-gray-700">
                          Va alaykum assalom va rahmatullohi va barakatuhu. Islomda namozlarni jam qilish (birlashtirish) faqat ma'lum holatlarda ruxsat etilgan. Bular safarda bo'lganingizda, kasallik paytida yoki jiddiy qiyinchilik tug'diradigan ob-havo sharoitlarida. Agar siz doimiy ishda bo'lsangiz, namozlarni vaqtida ado etishga harakat qilishingiz kerak. Ish joyingizda namoz o'qish imkoniyati bo'lmasa, tanaffus vaqtida yaqin atrofdagi masjidga borish yoki xoli joyda namoz o'qish mumkin. Agar bu ham imkonsiz bo'lsa, namozlarni qoldirmaslik uchun ish jadvalingizni o'zgartirishga harakat qiling.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center text-sm text-gray-500">
                    <Calendar class="h-4 w-4 mr-1" />
                    <span>{{ new Date().toLocaleDateString() }}</span>
                    <span class="mx-2">•</span>
                    <User class="h-4 w-4 mr-1" />
                    <span>Shayx Abdulaziz</span>
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script setup>
import { BookOpen, User, Calendar, ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>