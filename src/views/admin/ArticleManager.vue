<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Maqolalarni boshqarish</h1>
      <button
          @click="showAddArticleModal = true"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
      >
        <Plus class="h-5 w-5 mr-2" />
        Yangi maqola qo'shish
      </button>
    </div>

    <!-- Search and Filter -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Maqola qidirish..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <select
              v-model="selectedCategory"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
            <option value="">Barcha kategoriyalar</option>
            <option value="aqida">Aqida</option>
            <option value="fiqh">Fiqh</option>
            <option value="tarix">Tarix</option>
            <option value="axloq">Axloq</option>
            <option value="oila">Oila</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Articles Table -->
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
            Sarlavha
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kategoriya
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Muallif
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sana
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amallar
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="article in filteredArticles" :key="article.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ article.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <img :src="article.image" alt="Article Image" class="h-10 w-16 object-cover rounded" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ article.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                {{ article.category }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ article.author }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ article.date }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
              >
                {{ article.status === 'published' ? 'Chop etilgan' : 'Qoralama' }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
                @click="editArticle(article)"
                class="text-emerald-600 hover:text-emerald-900 mr-3"
            >
              <Edit class="h-4 w-4" />
            </button>
            <button
                @click="deleteArticle(article.id)"
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

    <!-- Add/Edit Article Modal -->
    <div v-if="showAddArticleModal || showEditArticleModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">
            {{ showEditArticleModal ? 'Maqolani tahrirlash' : 'Yangi maqola qo\'shish' }}
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
              <label class="block text-sm font-medium text-gray-700 mb-1">Sarlavha</label>
              <input
                  type="text"
                  v-model="currentArticle.title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select
                  v-model="currentArticle.category"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Aqida">Aqida</option>
                <option value="Fiqh">Fiqh</option>
                <option value="Tarix">Tarix</option>
                <option value="Axloq">Axloq</option>
                <option value="Oila">Oila</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Muallif</label>
              <input
                  type="text"
                  v-model="currentArticle.author"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">O'qish vaqti (daqiqa)</label>
              <input
                  type="number"
                  v-model="currentArticle.readTime"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                  v-model="currentArticle.status"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="published">Chop etilgan</option>
                <option value="draft">Qoralama</option>
              </select>
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Qisqacha ma'lumot</label>
            <textarea
                v-model="currentArticle.excerpt"
                rows="2"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Maqola matni</label>
            <textarea
                v-model="currentArticle.content"
                rows="10"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">Maqola rasmi</label>
            <div class="flex items-center">
              <div class="w-32 h-20 border border-gray-300 rounded-md overflow-hidden mr-4">
                <img
                    :src="currentArticle.image || '/placeholder.svg?height=200&width=300'"
                    alt="Article Image"
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

          <div class="mt-6 flex justify-end">
            <button
                @click="closeModals"
                class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-50 transition-colors"
            >
              Bekor qilish
            </button>
            <button
                @click="saveArticle"
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
          <h3 class="text-lg font-medium text-gray-800">Maqolani o'chirish</h3>
        </div>

        <div class="p-6">
          <p class="text-gray-700 mb-6">Haqiqatan ham bu maqolani o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.</p>

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
const articles = ref([
  {
    id: 1,
    title: 'Imon asoslari: Islomda e\'tiqod masalalari',
    category: 'Aqida',
    author: 'Abdulaziz Mansur',
    date: '2023-04-15',
    readTime: 10,
    excerpt: 'Islomda imon asoslari qanday? Allohga, farishtalariga, kitoblariga, payg\'ambarlariga, oxirat kuniga va taqdir-qazoga ishonish haqida batafsil ma\'lumot.',
    content: 'Islom dinida imon asoslari olti qismdan iborat bo\'lib, ular Qur\'oni Karim va hadislarda bayon qilingan. Bu asoslar musulmon kishining e\'tiqodini tashkil etadi va ular quyidagilardir...',
    image: '/placeholder.svg?height=500&width=1000',
    status: 'published'
  },
  {
    id: 2,
    title: 'Namoz o\'qish tartibi: to\'g\'ri namoz o\'qish yo\'riqnomasi',
    category: 'Fiqh',
    author: 'Abdulaziz Mansur',
    date: '2023-04-10',
    readTime: 8,
    excerpt: 'Namoz o\'qishning to\'g\'ri tartibi, tahorat olishdan tortib namozni yakunlashgacha bo\'lgan barcha bosqichlar haqida batafsil ma\'lumot.',
    content: 'Namoz Islomning besh asosiy ruknidan biri bo\'lib, har bir musulmon uchun farzdir. Namoz o\'qish tartibi quyidagicha...',
    image: '/placeholder.svg?height=500&width=1000',
    status: 'published'
  },
  {
    id: 3,
    title: 'Islomda oila: er-xotin munosabatlari',
    category: 'Oila',
    author: 'Abdulaziz Mansur',
    date: '2023-04-05',
    readTime: 7,
    excerpt: 'Islomda oila muqaddas hisoblanadi. Er-xotin o\'rtasidagi munosabatlar, ularning huquq va majburiyatlari haqida.',
    content: 'Islomda oila jamiyatning asosiy bo\'g\'ini hisoblanadi. Oila qurishdan maqsad...',
    image: '/placeholder.svg?height=500&width=1000',
    status: 'draft'
  }
]);

// Search and filter
const searchQuery = ref('');
const selectedCategory = ref('');

const filteredArticles = computed(() => {
  let result = articles.value;

  if (searchQuery.value) {
    const query = searchQuery.value;
    result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    result = result.filter(article =>
        article.category.toLowerCase() === selectedCategory.value
    );
  }

  return result;
});

// Modal states
const showAddArticleModal = ref(false);
const showEditArticleModal = ref(false);
const showDeleteModal = ref(false);
const currentArticle = ref({
  id: null,
  title: '',
  category: 'Aqida',
  author: 'Abdulaziz Mansur',
  date: new Date().toISOString().split('T')[0],
  readTime: 5,
  excerpt: '',
  content: '',
  image: '/placeholder.svg?height=500&width=1000',
  status: 'published'
});
const articleToDeleteId = ref(null);

// Methods
const editArticle = (article) => {
  currentArticle.value = { ...article };
  showEditArticleModal.value = true;
};

const deleteArticle = (id) => {
  articleToDeleteId.value = id;
  showDeleteModal.value = true;
};

const confirmDelete = () => {
  articles.value = articles.value.filter(article => article.id !== articleToDeleteId.value);
  showDeleteModal.value = false;
  articleToDeleteId.value = null;
};

const saveArticle = () => {
  if (showEditArticleModal.value) {
    // Update existing article
    const index = articles.value.findIndex(a => a.id === currentArticle.value.id);
    if (index !== -1) {
      articles.value[index] = { ...currentArticle.value };
    }
  } else {
    // Add new article
    const newId = Math.max(0, ...articles.value.map(a => a.id)) + 1;
    articles.value.push({
      ...currentArticle.value,
      id: newId,
      date: new Date().toISOString().split('T')[0]
    });
  }

  closeModals();
};

const closeModals = () => {
  showAddArticleModal.value = false;
  showEditArticleModal.value = false;
  currentArticle.value = {
    id: null,
    title: '',
    category: 'Aqida',
    author: 'Abdulaziz Mansur',
    date: new Date().toISOString().split('T')[0],
    readTime: 5,
    excerpt: '',
    content: '',
    image: '/placeholder.svg?height=500&width=1000',
    status: 'published'
  };
};
</script>