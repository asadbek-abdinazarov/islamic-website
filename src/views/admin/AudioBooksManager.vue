<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Audio kitoblarni boshqarish</h1>
      <button
          @click="showAddAudioBookModal = true"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
      >
        <Plus class="h-5 w-5 mr-2" />
        Yangi audio kitob qo'shish
      </button>
    </div>

    <!-- Search and Filter -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Audio kitob qidirish..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <select
              v-model="selectedCategory"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
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

    <!-- Audio Books Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rasm
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Nomi
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Qori
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kategoriya
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Davomiyligi
          </th>
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amallar
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="audioBook in filteredAudioBooks" :key="audioBook.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ audioBook.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <img :src="audioBook.coverImage" alt="Audio Book Cover" class="h-12 w-10 object-cover rounded" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ audioBook.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ audioBook.narrator }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                {{ audioBook.category }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ audioBook.duration }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
                @click="editAudioBook(audioBook)"
                class="text-emerald-600 hover:text-emerald-900 mr-3"
            >
              <Edit class="h-4 w-4" />
            </button>
            <button
                @click="deleteAudioBook(audioBook.id)"
                class="text-red-600 hover:text-red-900"
            >
              <Trash2 class="h-4 w-4" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center">
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

    <!-- Add/Edit Audio Book Modal -->
    <div v-if="showAddAudioBookModal || showEditAudioBookModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">
            {{ showEditAudioBookModal ? 'Audio kitobni tahrirlash' : 'Yangi audio kitob qo\'shish' }}
          </h3>
          <button
              @click="closeModals"
              class="text-gray-400 hover:text-gray-500"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kitob nomi</label>
              <input
                  type="text"
                  v-model="currentAudioBook.title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Qori</label>
              <input
                  type="text"
                  v-model="currentAudioBook.narrator"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select
                  v-model="currentAudioBook.category"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Qur'on">Qur'on</option>
                <option value="Hadis">Hadis</option>
                <option value="Fiqh">Fiqh</option>
                <option value="Tarix">Tarix</option>
                <option value="Tasavvuf">Tasavvuf</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Davomiyligi (soat)</label>
              <input
                  type="text"
                  v-model="currentAudioBook.duration"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Misol: 5 soat"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Yil</label>
              <input
                  type="number"
                  v-model="currentAudioBook.year"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Qisqacha ma'lumot</label>
            <textarea
                v-model="currentAudioBook.description"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Muqova rasmi</label>
            <div class="flex items-center">
              <div class="w-24 h-32 border border-gray-300 rounded-md overflow-hidden mr-4">
                <img
                    :src="currentAudioBook.coverImage || '/placeholder.svg?height=150&width=100'"
                    alt="Cover"
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

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Audio fayllar</label>
            <div class="border border-gray-300 rounded-md p-4">
              <div v-for="(track, index) in currentAudioBook.tracks" :key="index" class="flex items-center justify-between mb-3 last:mb-0">
                <div class="flex-grow mr-2">
                  <input
                      type="text"
                      v-model="track.title"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-1"
                      placeholder="Trek nomi"
                  />
                  <div class="flex">
                    <input
                        type="text"
                        v-model="track.audioUrl"
                        class="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Audio fayl havolasi"
                    />
                    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-r-md text-sm transition-colors">
                      Tanlash
                    </button>
                  </div>
                </div>
                <button
                    @click="removeTrack(index)"
                    class="text-red-500 hover:text-red-700 ml-2"
                >
                  <Trash2 class="h-5 w-5" />
                </button>
              </div>

              <button
                  @click="addTrack"
                  class="mt-3 flex items-center text-emerald-600 hover:text-emerald-800"
              >
                <Plus class="h-4 w-4 mr-1" />
                Audio fayl qo'shish
              </button>
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <button
                @click="closeModals"
                class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-50 transition-colors"
            >
              Bekor qilish
            </button>
            <button
                @click="saveAudioBook"
                class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-medium text-gray-800">Audio kitobni o'chirish</h3>
        </div>

        <div class="p-6">
          <p class="text-gray-700 mb-6">Haqiqatan ham bu audio kitobni o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.</p>

          <div class="flex justify-end">
            <button
                @click="showDeleteModal = false"
                class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-50 transition-colors"
            >
              Bekor qilish
            </button>
            <button
                @click="confirmDelete"
                class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              O'chirish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Plus, Edit, Trash2, ChevronLeft, ChevronRight, X } from 'lucide-vue-next';

// Sample data
const audioBooks = ref([
  {
    id: 1,
    title: 'Qur\'oni Karim (O\'zbek tilida audio)',
    narrator: 'Abdulbosit Abdussomad',
    category: 'Qur\'on',
    duration: '24 soat',
    year: 2020,
    description: 'Qur\'oni Karimning o\'zbek tilidagi audio versiyasi. Professional qorilar tomonidan o\'qilgan.',
    coverImage: '/placeholder.svg?height=500&width=350',
    tracks: [
      { title: 'Fotiha surasi', audioUrl: '/audio/quran/fatiha.mp3', duration: '5:00' },
      { title: 'Baqara surasi (1-10 oyatlar)', audioUrl: '/audio/quran/baqara-1-10.mp3', duration: '8:30' },
      { title: 'Baqara surasi (11-20 oyatlar)', audioUrl: '/audio/quran/baqara-11-20.mp3', duration: '7:45' },
      { title: 'Baqara surasi (21-30 oyatlar)', audioUrl: '/audio/quran/baqara-21-30.mp3', duration: '9:15' },
      { title: 'Baqara surasi (31-40 oyatlar)', audioUrl: '/audio/quran/baqara-31-40.mp3', duration: '8:20' },
    ]
  },
  {
    id: 2,
    title: 'Sahihi Buxoriy (Audio kitob)',
    narrator: 'Ahmad Qori',
    category: 'Hadis',
    duration: '12 soat',
    year: 2021,
    description: 'Imom Buxoriy tomonidan to\'plangan ishonchli hadislar to\'plamining audio versiyasi.',
    coverImage: '/placeholder.svg?height=500&width=350',
    tracks: [
      { title: '1-bob: Vahiy haqida', audioUrl: '/audio/bukhari/chapter1.mp3', duration: '45:00' },
      { title: '2-bob: Imon haqida', audioUrl: '/audio/bukhari/chapter2.mp3', duration: '52:30' },
      { title: '3-bob: Ilm haqida', audioUrl: '/audio/bukhari/chapter3.mp3', duration: '48:15' },
    ]
  },
  {
    id: 3,
    title: 'Riyadus-solihiyn (Audio kitob)',
    narrator: 'Mahmud Qori',
    category: 'Hadis',
    duration: '10 soat',
    year: 2022,
    description: 'Imom Navaviy tomonidan to\'plangan hadislar to\'plamining audio versiyasi.',
    coverImage: '/placeholder.svg?height=500&width=350',
    tracks: [
      { title: '1-bob: Ixlos haqida', audioUrl: '/audio/riyadus-salihin/chapter1.mp3', duration: '40:00' },
      { title: '2-bob: Tavba haqida', audioUrl: '/audio/riyadus-salihin/chapter2.mp3', duration: '38:30' },
      { title: '3-bob: Sabr haqida', audioUrl: '/audio/riyadus-salihin/chapter3.mp3', duration: '42:15' },
    ]
  }
]);

// Search and filter
const searchQuery = ref('');
const selectedCategory = ref('');

const filteredAudioBooks = computed(() => {
  let result = audioBooks.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(audioBook =>
        audioBook.title.toLowerCase().includes(query) ||
        audioBook.narrator.toLowerCase().includes(query) ||
        audioBook.description.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    result = result.filter(audioBook =>
        audioBook.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

  return result;
});

// Modal states
const showAddAudioBookModal = ref(false);
const showEditAudioBookModal = ref(false);
const showDeleteModal = ref(false);
const currentAudioBook = ref({
  id: null,
  title: '',
  narrator: '',
  category: 'Qur\'on',
  duration: '',
  year: new Date().getFullYear(),
  description: '',
  coverImage: '/placeholder.svg?height=500&width=350',
  tracks: [
    { title: '', audioUrl: '', duration: '' }
  ]
});
const audioBookToDeleteId = ref(null);


const editAudioBook = (audioBook) => {
  currentAudioBook.value = { ...audioBook };
  showEditAudioBookModal.value = true;
};

const deleteAudioBook = (id) => {
  audioBookToDeleteId.value = id;
  showDeleteModal.value = true;
};

const confirmDelete = () => {
  audioBooks.value = audioBooks.value.filter(audioBook => audioBook.id !== audioBookToDeleteId.value);
  showDeleteModal.value = false;
  audioBookToDeleteId.value = null;
};

const addTrack = () => {
  currentAudioBook.value.tracks.push({ title: '', audioUrl: '', duration: '' });
};

const removeTrack = (index) => {
  currentAudioBook.value.tracks.splice(index, 1);
  if (currentAudioBook.value.tracks.length === 0) {
    addTrack();
  }
};

const saveAudioBook = () => {
  if (showEditAudioBookModal.value) {
    const index = audioBooks.value.findIndex(a => a.id === currentAudioBook.value.id);
    if (index !== -1) {
      audioBooks.value[index] = { ...currentAudioBook.value };
    }
  } else {
    const newId = Math.max(0, ...audioBooks.value.map(a => a.id)) + 1;
    audioBooks.value.push({
      ...currentAudioBook.value,
      id: newId
    });
  }

  closeModals();
};

const closeModals = () => {
  showAddAudioBookModal.value = false;
  showEditAudioBookModal.value = false;
  currentAudioBook.value = {
    id: null,
    title: '',
    narrator: '',
    category: 'Qur\'on',
    duration: '',
    year: new Date().getFullYear(),
    description: '',
    coverImage: '/placeholder.svg?height=500&width=350',
    tracks: [
      { title: '', audioUrl: '', duration: '' }
    ]
  };
};
</script>