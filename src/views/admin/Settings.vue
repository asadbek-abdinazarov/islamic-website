<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Tizim sozlamalari</h1>
      <button
          @click="saveSettings"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        O'zgarishlarni saqlash
      </button>
    </div>

    <!-- General Settings -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">Umumiy sozlamalar</h2>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Sayt nomi</label>
            <input
                type="text"
                v-model="settings.siteName"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Sayt tavsifi</label>
            <input
                type="text"
                v-model="settings.siteDescription"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Admin elektron pochta</label>
            <input
                type="email"
                v-model="settings.adminEmail"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Telefon raqami</label>
            <input
                type="text"
                v-model="settings.phoneNumber"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div class="mt-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Sayt logotipi</label>
          <div class="flex items-center">
            <div class="w-12 h-12 border border-gray-300 rounded-md overflow-hidden mr-4 flex items-center justify-center bg-emerald-50">
              <BookOpenText class="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors">
                Logotipni o'zgartirish
              </button>
              <p class="text-xs text-gray-500 mt-1">PNG, JPG yoki SVG. Maksimal hajmi 1MB</p>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Favicon</label>
          <div class="flex items-center">
            <div class="w-8 h-8 border border-gray-300 rounded-md overflow-hidden mr-4 flex items-center justify-center bg-emerald-50">
              <BookOpenText class="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors">
                Faviconni o'zgartirish
              </button>
              <p class="text-xs text-gray-500 mt-1">ICO, PNG yoki SVG. Maksimal hajmi 100KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media Settings -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">Ijtimoiy tarmoqlar</h2>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <Facebook class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="settings.socialMedia.facebook"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Facebook sahifa havolasi"
              />
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <Twitter class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="settings.socialMedia.twitter"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Twitter sahifa havolasi"
              />
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <Instagram class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="settings.socialMedia.instagram"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Instagram sahifa havolasi"
              />
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <Youtube class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="settings.socialMedia.youtube"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="YouTube kanal havolasi"
              />
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <Telegram class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="settings.socialMedia.telegram"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Telegram kanal havolasi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO Settings -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">SEO sozlamalari</h2>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Meta sarlavha</label>
            <input
                type="text"
                v-model="settings.seo.metaTitle"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Meta tavsif</label>
            <textarea
                v-model="settings.seo.metaDescription"
                rows="2"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Meta kalit so'zlar</label>
            <input
                type="text"
                v-model="settings.seo.metaKeywords"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Vergul bilan ajratilgan kalit so'zlar"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Google Analytics ID</label>
            <input
                type="text"
                v-model="settings.seo.googleAnalyticsId"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="UA-XXXXXXXXX-X"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Security Settings -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-medium text-gray-800">Xavfsizlik sozlamalari</h2>
      </div>
      <div class="p-6">
        <div class="space-y-6">
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm font-medium text-gray-700">Admin parolini o'zgartirish</label>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Joriy parol</label>
                <input
                    type="password"
                    v-model="passwordChange.currentPassword"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">Yangi parol</label>
                <input
                    type="password"
                    v-model="passwordChange.newPassword"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-1">Yangi parolni tasdiqlang</label>
                <input
                    type="password"
                    v-model="passwordChange.confirmPassword"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button
                  @click="changePassword"
                  class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Parolni o'zgartirish
              </button>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm font-medium text-gray-700">Ikki faktorli autentifikatsiya</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                    type="checkbox"
                    v-model="settings.security.twoFactorAuth"
                    id="toggle-2fa"
                    class="sr-only"
                />
                <label
                    for="toggle-2fa"
                    class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    :class="{ 'bg-emerald-600': settings.security.twoFactorAuth }"
                >
                  <span
                      class="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"
                      :class="{ 'translate-x-4': settings.security.twoFactorAuth }"
                  ></span>
                </label>
              </div>
            </div>
            <p class="text-sm text-gray-500">
              Ikki faktorli autentifikatsiya tizimga kirishda qo'shimcha xavfsizlik qatlamini ta'minlaydi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BookOpenText, Facebook, Twitter, Instagram, Youtube, Telegram } from 'lucide-vue-next';

const settings = ref({
  siteName: 'IslamicHub',
  siteDescription: 'Islomiy bilimlar portali',
  adminEmail: 'admin@example.com',
  phoneNumber: '+998 90 123 45 67',
  socialMedia: {
    facebook: 'https://facebook.com/islamichub',
    twitter: 'https://twitter.com/islamichub',
    instagram: 'https://instagram.com/islamichub',
    youtube: 'https://youtube.com/channel/islamichub',
    telegram: 'https://t.me/islamichub'
  },
  seo: {
    metaTitle: 'IslamicHub - Islomiy bilimlar portali',
    metaDescription: 'IslamicHub - Islomiy kitoblar, maqolalar, audio kitoblar va fatvolar to\'plami',
    metaKeywords: 'islom, qur\'on, hadis, fatvo, kitoblar, audio',
    googleAnalyticsId: 'UA-123456789-1'
  },
  security: {
    twoFactorAuth: false
  }
});

const passwordChange = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const saveSettings = () => {
  // In a real application, you would send this data to your backend
  alert('Sozlamalar saqlandi!');
};

const changePassword = () => {
  if (!passwordChange.value.currentPassword) {
    alert('Joriy parolni kiriting');
    return;
  }

  if (!passwordChange.value.newPassword) {
    alert('Yangi parolni kiriting');
    return;
  }

  if (passwordChange.value.newPassword !== passwordChange.value.confirmPassword) {
    alert('Yangi parol va tasdiqlash paroli mos kelmayapti');
    return;
  }

  // In a real application, you would send this data to your backend
  alert('Parol muvaffaqiyatli o\'zgartirildi!');

  // Reset form
  passwordChange.value = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
};
</script>