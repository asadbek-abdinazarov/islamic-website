<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Men haqimda sahifasini boshqarish</h1>
      <button
          @click="saveChanges"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        O'zgarishlarni saqlash
      </button>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Asosiy ma'lumotlar</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Ism</label>
            <input
                type="text"
                v-model="aboutData.name"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kasb</label>
            <input
                type="text"
                v-model="aboutData.profession"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Qisqacha ma'lumot</label>
          <textarea
              v-model="aboutData.bio"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Batafsil ma'lumot</label>
          <textarea
              v-model="aboutData.description"
              rows="6"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Rasm</label>
          <div class="flex items-center">
            <div class="w-24 h-24 rounded-full overflow-hidden border border-gray-300 mr-4">
              <img
                  :src="aboutData.image || '/placeholder.svg?height=100&width=100'"
                  alt="Profile"
                  class="w-full h-full object-cover"
              />
            </div>
            <div>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors">
                Rasmni o'zgartirish
              </button>
              <p class="text-xs text-gray-500 mt-1">PNG, JPG yoki GIF. Maksimal hajmi 1MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Ijtimoiy tarmoqlar</h2>

        <div class="space-y-4">
          <div v-for="(social, index) in aboutData.socialMedia" :key="index" class="flex items-center">
            <div class="w-10 flex-shrink-0">
              <component :is="getSocialIcon(social.platform)" class="h-5 w-5 text-gray-600" />
            </div>
            <div class="flex-grow">
              <input
                  type="text"
                  v-model="social.url"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  :placeholder="`${social.platform} havolasi`"
              />
            </div>
            <div class="ml-2">
              <button
                  @click="removeSocialMedia(index)"
                  class="text-red-500 hover:text-red-700"
              >
                <Trash2 class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <button
            @click="addSocialMedia"
            class="mt-4 flex items-center text-emerald-600 hover:text-emerald-800"
        >
          <Plus class="h-4 w-4 mr-1" />
          Ijtimoiy tarmoq qo'shish
        </button>
      </div>
    </div>

    <!-- Education -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Ta'lim</h2>

        <div class="space-y-4">
          <div v-for="(edu, index) in aboutData.education" :key="index" class="border border-gray-200 rounded-md p-4">
            <div class="flex justify-between mb-2">
              <h3 class="font-medium text-gray-800">Ta'lim muassasasi #{{ index + 1 }}</h3>
              <button
                  @click="removeEducation(index)"
                  class="text-red-500 hover:text-red-700"
              >
                <Trash2 class="h-5 w-5" />
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Muassasa nomi</label>
                <input
                    type="text"
                    v-model="edu.institution"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Yo'nalish</label>
                <input
                    type="text"
                    v-model="edu.degree"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Boshlanish yili</label>
                <input
                    type="text"
                    v-model="edu.startYear"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Tugash yili</label>
                <input
                    type="text"
                    v-model="edu.endYear"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        <button
            @click="addEducation"
            class="mt-4 flex items-center text-emerald-600 hover:text-emerald-800"
        >
          <Plus class="h-4 w-4 mr-1" />
          Ta'lim qo'shish
        </button>
      </div>
    </div>

    <!-- Experience -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Tajriba</h2>

        <div class="space-y-4">
          <div v-for="(exp, index) in aboutData.experience" :key="index" class="border border-gray-200 rounded-md p-4">
            <div class="flex justify-between mb-2">
              <h3 class="font-medium text-gray-800">Ish joyi #{{ index + 1 }}</h3>
              <button
                  @click="removeExperience(index)"
                  class="text-red-500 hover:text-red-700"
              >
                <Trash2 class="h-5 w-5" />
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Tashkilot nomi</label>
                <input
                    type="text"
                    v-model="exp.company"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Lavozim</label>
                <input
                    type="text"
                    v-model="exp.position"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Boshlanish yili</label>
                <input
                    type="text"
                    v-model="exp.startYear"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Tugash yili</label>
                <input
                    type="text"
                    v-model="exp.endYear"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        <button
            @click="addExperience"
            class="mt-4 flex items-center text-emerald-600 hover:text-emerald-800"
        >
          <Plus class="h-4 w-4 mr-1" />
          Tajriba qo'shish
        </button>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-800 mb-4">Bog'lanish ma'lumotlari</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Manzil</label>
            <input
                type="text"
                v-model="aboutData.contact.address"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
            <input
                type="text"
                v-model="aboutData.contact.phone"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
                type="email"
                v-model="aboutData.contact.email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Veb-sayt</label>
            <input
                type="text"
                v-model="aboutData.contact.website"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Facebook, Twitter, Instagram, Youtube, Mail, Plus, Trash2 } from 'lucide-vue-next';

const aboutData = ref({
  name: 'Abdulaziz Mansur',
  profession: 'Islomiy ilmlar bo\'yicha mutaxassis va tarjimon',
  bio: 'Assalomu alaykum va rahmatullohi va barokatuhu! Men Abdulaziz Mansur, islomiy ilmlar bo\'yicha mutaxassis va tarjimon. 20 yildan ortiq vaqt davomida islomiy kitoblarni o\'zbek tiliga tarjima qilish va islomiy bilimlarni tarqatish bilan shug\'ullanib kelmoqdaman.',
  description: 'Mening maqsadim - islomiy bilimlarni sodda va tushunarli tarzda yetkazish, hamda o\'zbek tilidagi sifatli islomiy adabiyotlar sonini ko\'paytirish.',
  image: '/placeholder.svg?height=100&width=100',
  socialMedia: [
    { platform: 'Facebook', url: 'https://facebook.com/username' },
    { platform: 'Twitter', url: 'https://twitter.com/username' },
    { platform: 'Instagram', url: 'https://instagram.com/username' },
    { platform: 'Youtube', url: 'https://youtube.com/channel/username' }
  ],
  education: [
    {
      institution: 'Al-Azhar universiteti',
      degree: 'Islomiy ilohiyot fakulteti',
      startYear: '1995',
      endYear: '2000'
    },
    {
      institution: 'Toshkent Islom universiteti',
      degree: 'Islom tarixi va falsafasi',
      startYear: '1990',
      endYear: '1995'
    }
  ],
  experience: [
    {
      company: 'Islomiy tadqiqotlar markazi',
      position: 'Bosh mutaxassis',
      startYear: '2010',
      endYear: 'hozirgi vaqtgacha'
    },
    {
      company: 'Hilol nashriyoti',
      position: 'Bosh muharrir',
      startYear: '2005',
      endYear: '2010'
    },
    {
      company: 'Toshkent Islom universiteti',
      position: 'O\'qituvchi',
      startYear: '2000',
      endYear: '2005'
    }
  ],
  contact: {
    address: 'Toshkent shahri, Yunusobod tumani, Islom universiteti, 100170',
    phone: '+998 90 123 45 67',
    email: 'info@example.com',
    website: 'www.example.com'
  }
});

const getSocialIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'facebook': return Facebook;
    case 'twitter': return Twitter;
    case 'instagram': return Instagram;
    case 'youtube': return Youtube;
    default: return Mail;
  }
};

const addSocialMedia = () => {
  aboutData.value.socialMedia.push({ platform: 'Facebook', url: '' });
};

const removeSocialMedia = (index) => {
  aboutData.value.socialMedia.splice(index, 1);
};

const addEducation = () => {
  aboutData.value.education.push({
    institution: '',
    degree: '',
    startYear: '',
    endYear: ''
  });
};

const removeEducation = (index) => {
  aboutData.value.education.splice(index, 1);
};

const addExperience = () => {
  aboutData.value.experience.push({
    company: '',
    position: '',
    startYear: '',
    endYear: ''
  });
};

const removeExperience = (index) => {
  aboutData.value.experience.splice(index, 1);
};

const saveChanges = () => {
  // In a real application, you would send this data to your backend
  alert('O\'zgarishlar saqlandi!');
};
</script>