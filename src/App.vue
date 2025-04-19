<template>
  <div class="min-h-screen bg-white">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AdminLayout from './layouts/AdminLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

const route = useRoute();
const currentLayout = ref(route.path.startsWith('/admin') ? AdminLayout : MainLayout);

const layout = computed(() => {
  return currentLayout.value;
});
</script>