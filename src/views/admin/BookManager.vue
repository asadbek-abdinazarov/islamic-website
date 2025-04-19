<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Kitoblarni boshqarish</h1>
      <button
          @click="showAddBookModal = true"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
      >
        <Plus class="h-5 w-5 mr-2" />
        Yangi kitob qo'shish
      </button>
    </div>

    <!-- Search and Filter -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Kitob qidirish..."
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

    <!-- Books Table -->
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
            Muallif
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kategoriya
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Yil
          </th>
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amallar
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="book in filteredBooks" :key="book.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ book.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <img :src="book.coverImage" alt="Book Cover" class="h-12 w-10 object-cover rounded" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ book.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ book.author }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                {{ book.category }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ book.year }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
                @click="editBook(book)"
                class="text-emerald-600 hover:text-emerald-900 mr-3"
            >
              <Edit class="h-4 w-4" />
            </button>
            <button
                @click="deleteBook(book.id)"
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

    <!-- Add/Edit Book Modal -->
    <div v-if="showAddBookModal || showEditBookModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">
            {{ showEditBookModal ? 'Kitobni tahrirlash' : 'Yangi kitob qo\'shish' }}
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
                  v-model="currentBook.title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Muallif</label>
              <input
                  type="text"
                  v-model="currentBook.author"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select
                  v-model="currentBook.category"
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
              <label class="block text-sm font-medium text-gray-700 mb-1">Yil</label>
              <input
                  type="number"
                  v-model="currentBook.year"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Sahifalar soni</label>
              <input
                  type="number"
                  v-model="currentBook.pages"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Narxi</label>
              <input
                  type="text"
                  v-model="currentBook.price"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Bepul yoki narxini kiriting"
              />
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Qisqacha ma'lumot</label>
            <textarea
                v-model="currentBook.shortDescription"
                rows="2"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Batafsil ma'lumot</label>
            <textarea
                v-model="currentBook.fullDescription"
                rows="4"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Muqova rasmi</label>
            <div class="flex items-center">
              <div class="w-24 h-32 border border-gray-300 rounded-md overflow-hidden mr-4">
                <img
                    :src="currentBook.coverImage || '/placeholder.svg?height=150&width=100'"
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
            <label class="block text-sm font-medium text-gray-700 mb-1">PDF fayl</label>
            <div class="flex items-center">
              <input
                  type="text"
                  v-model="currentBook.pdfUrl"
                  class="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 mr-2"
                  placeholder="PDF fayl havolasi"
              />
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors">
                Faylni yuklash
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
                @click="saveBook"
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
          <h3 class="text-lg font-medium text-gray-800">Kitobni o'chirish</h3>
        </div>

        <div class="p-6">
          <p class="text-gray-700 mb-6">Haqiqatan ham bu kitobni o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.</p>

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
const books = ref([
  {
    id: 1,
    title: 'Sahihi Buxoriy 1-jild',
    author: 'Imom Buxoriy',
    category: 'Hadis',
    year: 2020,
    pages: 532,
    price: 'Bepul',
    shortDescription: 'Imom Buxoriy tomonidan to\'plangan ishonchli hadislar to\'plami.',
    fullDescription: '"Sahihi Buxoriy" - Imom Muhammad ibn Ismoil al-Buxoriy tomonidan to\'plangan hadislar to\'plami bo\'lib, u Islom olamida eng ishonchli hadis to\'plamlaridan biri hisoblanadi.',
    coverImage: '/placeholder.svg?height=300&width=200',
    pdfUrl: '/books/sahih-bukhari-vol1.pdf'
  },
  {
    id: 2,
    title: 'Sahihi Buxoriy 2-jild',
    author: 'Imom Buxoriy',
    category: 'Hadis',
    year: 2020,
    pages: 498,
    price: 'Bepul',
    shortDescription: 'Imom Buxoriy tomonidan to\'plangan ishonchli hadislar to\'plami.',
    fullDescription: '"Sahihi Buxoriy" - Imom Muhammad ibn Ismoil al-Buxoriy tomonidan to\'plangan hadislar to\'plami bo\'lib, u Islom olamida eng ishonchli hadis to\'plamlaridan biri hisoblanadi.',
    coverImage: '/placeholder.svg?height=300&width=200',
    pdfUrl: '/books/sahih-bukhari-vol2.pdf'
  },
  {
    id: 3,
    title: 'Qur\'oni Karim ma\'nolari tarjimasi',
    author: 'Abdulaziz Mansur',
    category: 'Qur\'on',
    year: 2018,
    pages: 604,
    price: 'Bepul',
    shortDescription: 'Qur\'oni Karimning o\'zbek tilidagi ma\'nolari tarjimasi.',
    fullDescription: 'Qur\'oni Karimning o\'zbek tilidagi ma\'nolari tarjimasi. Abdulaziz Mansur tomonidan tayyorlangan ushbu tarjima sodda va tushunarli tilda yozilgan bo\'lib, har bir suraning ma\'nosi va tafsiri bilan birga keltirilgan.',
    coverImage: '/placeholder.svg?height=300&width=200',
    pdfUrl: '/books/quran-translation.pdf'
  }
]);

// Search and filter
const searchQuery = ref('');
const selectedCategory = ref('');

const filteredBooks = computed(() => {
  let result = books.value;

  if (searchQuery.value) {
    const query = searchQuery.value;
    result = result.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.shortDescription.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    result = result.filter(book =>
        book.category.toLowerCase() === selectedCategory.value
    );
  }

  return result;
});

// Modal states
const showAddBookModal = ref(false);
const showEditBookModal = ref(false);
const showDeleteModal = ref(false);
const currentBook = ref({
  id: null,
  title: '',
  author: '',
  category: 'Hadis',
  year: new Date().getFullYear(),
  pages: 0,
  price: 'Bepul',
  shortDescription: '',
  fullDescription: '',
  coverImage: '/placeholder.svg?height=300&width=200',
  pdfUrl: ''
});
const bookToDeleteId = ref(null);

// Methods
const editBook = (book) => {
  currentBook.value = { ...book };
  showEditBookModal.value = true;
};

const deleteBook = (id) => {
  bookToDeleteId.value = id;
  showDeleteModal.value = true;
};

const confirmDelete = () => {
  books.value = books.value.filter(book => book.id !== bookToDeleteId.value);
  showDeleteModal.value = false;
  bookToDeleteId.value = null;
};

const saveBook = () => {
  if (showEditBookModal.value) {
    // Update existing book
    const index = books.value.findIndex(b => b.id === currentBook.value.id);
    if (index !== -1) {
      books.value[index] = { ...currentBook.value };
    }
  } else {
    // Add new book
    const newId = Math.max(0, ...books.value.map(b => b.id)) + 1;
    books.value.push({
      ...currentBook.value,
      id: newId
    });
  }

  closeModals();
};

const closeModals = () => {
  showAddBookModal.value = false;
  showEditBookModal.value = false;
  currentBook.value = {
    id: null,
    title: '',
    author: '',
    category: 'Hadis',
    year: new Date().getFullYear(),
    pages: 0,
    price: 'Bepul',
    shortDescription: '',
    fullDescription: '',
    coverImage: '/placeholder.svg?height=300&width=200',
    pdfUrl: ''
  };
};
</script>