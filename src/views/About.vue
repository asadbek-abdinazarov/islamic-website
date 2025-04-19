<template>
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">Men haqimda</h1>

        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-emerald-100">
            <img src="/placeholder.png?height=200&width=200" alt="Profile" class="w-full h-full object-cover" />
          </div>

          <div>
            <h2 class="text-2xl font-bold text-emerald-700 mb-4">Abdulaziz Mansur</h2>
            <p class="text-gray-700 mb-4">
              Assalomu alaykum va rahmatullohi va barokatuhu! Men Abdulaziz Mansur, islomiy ilmlar bo'yicha mutaxassis va tarjimon.
              20 yildan ortiq vaqt davomida islomiy kitoblarni o'zbek tiliga tarjima qilish va islomiy bilimlarni tarqatish bilan shug'ullanib kelmoqdaman.
            </p>
            <p class="text-gray-700 mb-6">
              Mening maqsadim - islomiy bilimlarni sodda va tushunarli tarzda yetkazish, hamda o'zbek tilidagi sifatli islomiy adabiyotlar sonini ko'paytirish.
            </p>

            <div class="flex space-x-4">
              <a href="#" class="text-emerald-600 hover:text-emerald-800">
                <Facebook class="h-6 w-6" />
              </a>
              <a href="#" class="text-emerald-600 hover:text-emerald-800">
                <Twitter class="h-6 w-6" />
              </a>
              <a href="#" class="text-emerald-600 hover:text-emerald-800">
                <Instagram class="h-6 w-6" />
              </a>
              <a href="#" class="text-emerald-600 hover:text-emerald-800">
                <Youtube class="h-6 w-6" />
              </a>
              <a href="#" class="text-emerald-600 hover:text-emerald-800">
                <Mail class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-emerald-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-emerald-800 mb-4">Ta'lim</h3>
            <ul class="space-y-4">
              <li>
                <div class="font-medium">Al-Azhar universiteti</div>
                <div class="text-sm text-gray-600">Islomiy ilohiyot fakulteti, 1995-2000</div>
              </li>
              <li>
                <div class="font-medium">Toshkent Islom universiteti</div>
                <div class="text-sm text-gray-600">Islom tarixi va falsafasi, 1990-1995</div>
              </li>
            </ul>
          </div>

          <div class="bg-emerald-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-emerald-800 mb-4">Tajriba</h3>
            <ul class="space-y-4">
              <li>
                <div class="font-medium">Islomiy tadqiqotlar markazi</div>
                <div class="text-sm text-gray-600">Bosh mutaxassis, 2010-hozirgi vaqtgacha</div>
              </li>
              <li>
                <div class="font-medium">Hilol nashriyoti</div>
                <div class="text-sm text-gray-600">Bosh muharrir, 2005-2010</div>
              </li>
              <li>
                <div class="font-medium">Toshkent Islom universiteti</div>
                <div class="text-sm text-gray-600">O'qituvchi, 2000-2005</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-emerald-50 p-6 rounded-lg mb-12">
          <h3 class="text-xl font-bold text-emerald-800 mb-4">Tarjima qilgan kitoblarim</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <BookOpen class="h-5 w-5 text-emerald-600 mr-2" />
              <span>Qur'oni Karim ma'nolari tarjimasi</span>
            </li>
            <li class="flex items-center">
              <BookOpen class="h-5 w-5 text-emerald-600 mr-2" />
              <span>Sahihi Buxoriy</span>
            </li>
            <li class="flex items-center">
              <BookOpen class="h-5 w-5 text-emerald-600 mr-2" />
              <span>Riyadus-solihiyn</span>
            </li>
            <li class="flex items-center">
              <BookOpen class="h-5 w-5 text-emerald-600 mr-2" />
              <span>Islom tarixi</span>
            </li>
            <li class="flex items-center">
              <BookOpen class="h-5 w-5 text-emerald-600 mr-2" />
              <span>Payg'ambarlar qissalari</span>
            </li>
          </ul>
        </div>

        <div class="bg-emerald-50 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-emerald-800 mb-4">Bog'lanish</h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <MapPin class="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
              <div>
                <p>Toshkent shahri, Yunusobod tumani,</p>
                <p>Islom universiteti, 100170</p>
              </div>
            </div>
            <div class="flex items-center">
              <Phone class="h-5 w-5 text-emerald-600 mr-3" />
              <p>+998 90 123 45 67</p>
            </div>
            <div class="flex items-center">
              <Mail class="h-5 w-5 text-emerald-600 mr-3" />
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Facebook, Twitter, Instagram, Youtube, Mail, BookOpen, MapPin, Phone } from 'lucide-vue-next';
</script>