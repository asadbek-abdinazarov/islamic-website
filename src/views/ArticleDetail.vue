<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-sm text-emerald-600 mb-2">Kategoriya: Aqida</div>
        <h1 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Imon asoslari: Islomda e'tiqod masalalari</h1>

        <div class="flex items-center text-sm text-gray-500 mb-6">
          <Calendar class="h-4 w-4 mr-1" />
          <span>{{ new Date().toLocaleDateString() }}</span>
          <span class="mx-2">•</span>
          <User class="h-4 w-4 mr-1" />
          <span>Abdulaziz Mansur</span>
          <span class="mx-2">•</span>
          <Clock class="h-4 w-4 mr-1" />
          <span>10 daqiqa o'qish</span>
        </div>

        <img src="/placeholder.png?height=500&width=1000" alt="Article Cover" class="w-full h-auto rounded-lg mb-8" />

        <div class="prose max-w-none text-gray-700">
          <p class="mb-4">
            Islom dinida imon asoslari olti qismdan iborat bo'lib, ular Qur'oni Karim va hadislarda bayon qilingan. Bu asoslar musulmon kishining e'tiqodini tashkil etadi va ular quyidagilardir:
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">1. Allohga ishonish</h2>
          <p class="mb-4">
            Islomda imonning birinchi va eng muhim asosi - bu Allohning borligiga, yagonaligiga va Uning barcha sifatlariga ishonishdir. Alloh taolo yagona, sheriksizdur. U tug'ilmagan va tug'magan, Unga o'xshash hech narsa yo'q. U hamma narsani biluvchi, hamma narsaga qodir, abadiy va azaliydir.
          </p>
          <p class="mb-4">
            Qur'oni Karimda Alloh taolo shunday deydi: "Aytingki, U - Alloh yagonadir. Alloh behojatdir (ya'ni hech kimga va hech narsaga muhtoj emasdir). U tug'magan va tug'ilmagan. Va hech kim Unga teng emasdir" (Ixlos surasi, 1-4-oyatlar).
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">2. Farishtalariga ishonish</h2>
          <p class="mb-4">
            Islomda farishtalar - Alloh taoloning nurdan yaratilgan, doimo Unga itoat qiluvchi, gunoh qilmaydigan maxluqlaridir. Ular ko'zga ko'rinmaydilar, lekin Allohning amrlarini bajaradilar. Har bir farishtaning o'z vazifasi bor. Masalan, Jabroil (a.s.) vahiy yetkazuvchi, Mikoil (a.s.) tabiat hodisalarini boshqaruvchi, Isrofil (a.s.) qiyomat kunida sur chaluvchi, Azroil (a.s.) jon oluvchi farishta hisoblanadi.
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">3. Kitoblariga ishonish</h2>
          <p class="mb-4">
            Alloh taolo insoniyatga to'g'ri yo'lni ko'rsatish uchun turli payg'ambarlarga kitoblar nozil qilgan. Bular: Tavrot (Muso a.s.ga), Zabur (Dovud a.s.ga), Injil (Iso a.s.ga) va Qur'oni Karim (Muhammad s.a.v.ga). Musulmonlar bu kitoblarning asl nusxalariga ishonishlari kerak, lekin Qur'oni Karim oxirgi va o'z  Musulmonlar bu kitoblarning asl nusxalariga ishonishlari kerak, lekin Qur'oni Karim oxirgi va o'zgartirilmagan ilohiy kitob hisoblanadi. Qur'oni Karim Alloh taoloning so'zi bo'lib, u Muhammad (s.a.v.) orqali insoniyatga yetkazilgan va qiyomatgacha o'z asl holatida saqlanib qoladi.
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">4. Payg'ambarlariga ishonish</h2>
          <p class="mb-4">
            Alloh taolo insoniyatga to'g'ri yo'lni ko'rsatish uchun turli davrlarda payg'ambarlar yuborgan. Qur'oni Karimda 25 payg'ambarning nomi zikr etilgan, lekin ularning umumiy soni ancha ko'p. Birinchi payg'ambar Odam (a.s.) va oxirgisi Muhammad (s.a.v.) hisoblanadi. Musulmonlar barcha payg'ambarlarga ishonishlari va ularni hurmat qilishlari kerak.
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">5. Oxirat kuniga ishonish</h2>
          <p class="mb-4">
            Islomda oxirat kuniga ishonish - bu dunyo hayoti tugab, qiyomat qoyim bo'lishiga, barcha insonlar qayta tirilishiga, amallariga ko'ra hisob-kitob qilinishiga va jannat yoki do'zaxga tushishiga ishonishdir. Bu kun adolat kuni bo'lib, har bir inson o'z qilmishlariga yarasha mukofot yoki jazo oladi.
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">6. Taqdir-qazoga ishonish</h2>
          <p class="mb-4">
            Taqdir-qazoga ishonish - bu Alloh taoloning har bir narsani oldindan bilishi va belgilashiga ishonishdir. Alloh taolo hamma narsani biladi va hamma narsa Uning izni bilan sodir bo'ladi. Lekin bu insonning erkin irodasini inkor etmaydi. Inson o'z xatti-harakatlarida erkin, lekin Alloh taolo uning qilajak ishlarini oldindan biladi.
          </p>

          <h2 class="text-2xl font-bold text-emerald-800 my-4">Xulosa</h2>
          <p class="mb-4">
            Imon asoslari musulmon kishining e'tiqodini tashkil etadi va ular Islom dinining asosiy tushunchalarini o'z ichiga oladi. Bu asoslarga ishonish va ularni qalbdan qabul qilish musulmon bo'lishning muhim shartlaridan biridir. Imon asoslarini to'g'ri tushunish va ularga amal qilish orqali inson to'g'ri yo'lda yuradi va oxiratda najot topadi.
          </p>

          <p>
            Alloh taolo barcha musulmonlarga haqiqiy imon nasib etsin va to'g'ri yo'lda sobitqadam qilsin. Amin.
          </p>
        </div>

        <!-- Share Buttons -->
        <div class="flex items-center justify-center space-x-4 mt-8 py-4 border-t border-b border-gray-200">
          <button class="flex items-center text-gray-700 hover:text-emerald-600">
            <Share2 class="h-5 w-5 mr-2" />
            Ulashish
          </button>
          <button class="flex items-center text-gray-700 hover:text-emerald-600">
            <Facebook class="h-5 w-5 mr-2" />
            Facebook
          </button>
          <button class="flex items-center text-gray-700 hover:text-emerald-600">
            <Twitter class="h-5 w-5 mr-2" />
            Twitter
          </button>
          <button class="flex items-center text-gray-700 hover:text-emerald-600">
            <Printer class="h-5 w-5 mr-2" />
            Chop etish
          </button>
        </div>

        <!-- Related Articles -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-emerald-800 mb-6">O'xshash maqolalar</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="i in 2" :key="i" class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <router-link :to="`/articles/${i+1}`">
                <img src="/placeholder.png?height=300&width=500" alt="Article" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Islomda axloq-odob qoidalari</h3>
                  <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                    Islom dinida axloq-odob qoidalari va ularning kundalik hayotdagi ahamiyati haqida.
                  </p>
                  <div class="flex items-center text-xs text-gray-500">
                    <Calendar class="h-3 w-3 mr-1" />
                    <span>{{ new Date().toLocaleDateString() }}</span>
                  </div>
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
import { Calendar, User, Clock, Share2, Facebook, Twitter, Printer } from 'lucide-vue-next';
</script>