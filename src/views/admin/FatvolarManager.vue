<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Fatvolarni boshqarish</h1>
      <button
          @click="showAddFatvoModal = true"
          class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
        <Plus class="h-5 w-5 mr-2" />
        Yangi fatvo qo'shish
      </button>
    </div>

    <!-- Search and Filter -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-grow">
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Fatvo qidirish..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <select
              v-model="selectedCategory"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
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

    <!-- Fatvolar Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sarlavha
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kategoriya
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
        <tr v-for="fatvo in filteredFatvolar" :key="fatvo.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ fatvo.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ fatvo.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                {{ fatvo.category }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ fatvo.date }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
              <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="fatvo.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
              >
                {{ fatvo.status === 'published' ? 'Chop etilgan' : 'Qoralama' }}
              </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
                @click="editFatvo(fatvo)"
                class="text-emerald-600 hover:text-emerald-900 mr-3"
            >
              <Edit class="h-4 w-4" />
            </button>
            <button
                @click="deleteFatvo(fatvo.id)"
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

    <!-- Add/Edit Fatvo Modal -->
    <div v-if="showAddFatvoModal || showEditFatvoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800">
            {{ showEditFatvoModal ? 'Fatvoni tahrirlash' : 'Yangi fatvo qo\'shish' }}
          </h3>
          <button
              @click="closeModals"
              class="text-gray-400 hover:text-gray-500"
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Sarlavha</label>
              <input
                  type="text"
                  v-model="currentFatvo.title"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select
                  v-model="currentFatvo.category"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="namoz">Namoz</option>
                <option value="ro'za">Ro'za</option>
                <option value="zakot">Zakot</option>
                <option value="haj">Haj</option>
                <option value="oila">Oila</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Savol</label>
              <textarea
                  v-model="currentFatvo.question"
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Javob</label>
              <textarea
                  v-model="currentFatvo.answer"
                  rows="6"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Muallif</label>
              <input
                  type="text"
                  v-model="currentFatvo.author"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                  v-model="currentFatvo.status"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="published">Chop etilgan</option>
                <option value="draft">Qoralama</option>
              </select>
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
                @click="saveFatvo"
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
          <h3 class="text-lg font-medium text-gray-800">Fatvoni o'chirish</h3>
        </div>

        <div class="p-6">
          <p class="text-gray-700 mb-6">Haqiqatan ham bu fatvoni o'chirmoqchimisiz? Bu amalni qaytarib bo'lmaydi.</p>

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
const fatvolar = ref([
  {
    id: 1,
    title: 'Namoz vaqtlari haqida savol',
    category: 'Namoz',
    question: 'Assalomu alaykum, men ishxonamda namoz o\'qish imkoniyati yo\'q. Namozlarni jam qilib o\'qisam bo\'ladimi?',
    answer: 'Va alaykum assalom va rahmatullohi va barakatuhu. Islomda namozlarni jam qilish (birlashtirish) faqat ma\'lum holatlarda ruxsat etilgan. Bular safarda bo\'lganingizda, kasallik paytida yoki jiddiy qiyinchilik tug\'diradigan ob-havo sharoitlarida. Agar siz doimiy ishda bo\'lsangiz, namozlarni vaqtida ado etishga harakat qilishingiz kerak.',
    author: 'Shayx Abdulaziz',
    date: '2023-04-15',
    status: 'published'
  },
  {
    id: 2,
    title: 'Ro\'za tutish haqida savol',
    category: 'Ro\'za',
    question: 'Assalomu alaykum, men kasalman va doimiy dori ichishim kerak. Ramazon oyida ro\'za tutmasam bo\'ladimi?',
    answer: 'Va alaykum assalom va rahmatullohi va barakatuhu. Ha, agar siz kasallik sababli ro\'za tutolmasangiz, Alloh taolo sizga ruxsat bergan. Qur\'oni Karimda aytilganidek, "Sizlardan kim kasal yoki safarda bo\'lsa, boshqa kunlarda (ro\'za tutsin)" (Baqara surasi, 184-oyat).',
    author: 'Shayx Abdulaziz',
    date: '2023-04-10',
    status: 'published'
  },
  {
    id: 3,
    title: 'Zakot haqida savol',
    category: 'Zakot',
    question: 'Assalomu alaykum, zakot qanday hisoblanadi va kimga beriladi?',
    answer: 'Va alaykum assalom va rahmatullohi va barakatuhu. Zakot Islomning besh asosiy ruknidan biri bo\'lib, mol-mulki nisob miqdoriga yetgan har bir musulmon uchun farzdir. Zakot miqdori oltin, kumush, pul va tijorat mollari uchun 2.5%, chorva mollari uchun turlicha, dehqonchilik mahsulotlari uchun 5-10% hisoblanadi.',
    author: 'Shayx Abdulaziz',
    date: '2023-04-05',
    status: 'draft'
  }
]);

// Search and filter
const searchQuery = ref('');
const selectedCategory = ref('');

const filteredFatvolar = computed(() => {
  let result = fatvolar.value;

  if (searchQuery.value) {
    const query = searchQuery.value;
    result = result.filter(fatvo =>
        fatvo.title.toLowerCase().includes(query) ||
        fatvo.question.toLowerCase().includes(query) ||
        fatvo.answer.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    result = result.filter(fatvo =>
        fatvo.category.toLowerCase() === selectedCategory.value
    );
  }

  return result;
});

// Modal states
const showAddFatvoModal = ref(false);
const showEditFatvoModal = ref(false);
const showDeleteModal = ref(false);
const currentFatvo = ref({
  id: null,
  title: '',
  category: 'Namoz',
  question: '',
  answer: '',
  author: 'Shayx Abdulaziz',
  date: new Date().toISOString().split('T')[0],
  status: 'published'
});
const fatvoToDeleteId = ref(null);

// Methods
const editFatvo = (fatvo) => {
  currentFatvo.value = { ...fatvo };
  showEditFatvoModal.value = true;
};

const deleteFatvo = (id) => {
  fatvoToDeleteId.value = id;
  showDeleteModal.value = true;
};

const confirmDelete = () => {
  fatvolar.value = fatvolar.value.filter(fatvo => fatvo.id !== fatvoToDeleteId.value);
  showDeleteModal.value = false;
  fatvoToDeleteId.value = null;
};

const saveFatvo = () => {
  if (showEditFatvoModal.value) {
    // Update existing fatvo
    const index = fatvolar.value.findIndex(f => f.id === currentFatvo.value.id);
    if (index !== -1) {
      fatvolar.value[index] = { ...currentFatvo.value };
    }
  } else {
    // Add new fatvo
    const newId = Math.max(0, ...fatvolar.value.map(f => f.id)) + 1;
    fatvolar.value.push({
      ...currentFatvo.value,
      id: newId,
      date: new Date().toISOString().split('T')[0]
    });
  }

  closeModals();
};

const closeModals = () => {
  showAddFatvoModal.value = false;
  showEditFatvoModal.value = false;
  currentFatvo.value = {
    id: null,
    title: '',
    category: 'Namoz',
    question: '',
    answer: '',
    author: 'Shayx Abdulaziz',
    date: new Date().toISOString().split('T')[0],
    status: 'published'
  };
};
</script>