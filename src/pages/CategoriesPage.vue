<template>
  <q-page class="q-pa-md">
    <h4 class="text-h4 q-mb-md">Categorias de GIFs</h4>

    <div v-if="categoryStore.isLoadingCategories" class="text-center q-py-lg">
      <q-spinner color="primary" size="3em" />
      <p class="q-mt-sm">Carregando categorias...</p>
    </div>

    <div v-else-if="categoryStore.error && !categoryStore.categories.length" class="text-center text-red q-py-lg">
      <q-icon name="error" size="2em" />
      <p class="q-mt-sm">{{ categoryStore.error }}</p>
    </div>

    <div v-else class="row q-col-gutter-md q-mb-lg">
      <div
        v-for="category in categoryStore.allCategories"
        :key="category.name"
        class="col-xs-6 col-sm-4 col-md-3 col-lg-2 flex flex-center"
      >
        <q-card
          class="category-card full-width text-center cursor-pointer q-hoverable"
          :class="{ 'bg-primary text-white': category.name === categoryStore.currentCategory }"
          @click="selectCategory(category.name)"
        >
          <q-card-section>
            <q-icon :name="getCategoryIcon(category.name)" size="2em" class="q-mb-sm" />
            <div class="text-subtitle1">{{ category.name }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <h5 v-if="categoryStore.currentCategory" class="text-h5 q-mt-lg q-mb-md">
      GIFs para "{{ categoryStore.currentCategory }}"
    </h5>

    <div v-if="categoryStore.isLoadingCategoryGifs" class="text-center q-py-lg">
      <q-spinner color="primary" size="3em" />
      <p class="q-mt-sm">Carregando GIFs da categoria...</p>
    </div>

    <div v-else-if="categoryStore.error && categoryStore.currentCategory" class="text-center text-red q-py-lg">
      <q-icon name="error" size="2em" />
      <p class="q-mt-sm">{{ categoryStore.error }}</p>
    </div>

    <div v-else-if="categoryStore.currentCategory && categoryStore.getCurrentCategoryGifs.length === 0" class="text-center q-py-lg text-grey-7">
      <p>Nenhum GIF encontrado para esta categoria.</p>
    </div>

    <div v-else-if="categoryStore.currentCategory" class="row q-col-gutter-md">
      <div
        v-for="gif in categoryStore.getCurrentCategoryGifs"
        :key="gif.id"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 flex flex-center"
      >
        <GifCard :gif="gif" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCategoryStore } from 'src/stores/categoryStore';
import GifCard from 'src/components/GifCard.vue';

const categoryStore = useCategoryStore();

// Mapeamento de ícones para algumas categorias comuns
const categoryIcons = {
  'reactions': 'emoji_emotions',
  'entertainment': 'movie',
  'sports': 'sports_baseball',
  'stickers': 'insert_emoticon',
  'animals': 'pets',
  'action': 'bolt',
  'artists': 'palette',
  'celebrities': 'star',
  'food': 'fastfood',
  'nature': 'eco',
  'science': 'science',
  'travel': 'public',
  'gaming': 'sports_esports',
};

// Retorna um ícone baseado no nome da categoria, ou um ícone padrão
const getCategoryIcon = (categoryName) => {
  const normalizedName = categoryName.toLowerCase();
  return categoryIcons[normalizedName] || 'folder'; // 'folder' como ícone padrão
};


// Ação para selecionar uma categoria e buscar seus GIFs
const selectCategory = async (categoryName) => {
  await categoryStore.fetchGifsForCategory(categoryName);
};

// Ao montar o componente, carrega as categorias
onMounted(() => {
  if (categoryStore.categories.length === 0) {
    categoryStore.fetchCategories();
  }
});
</script>

<style scoped>
.category-card {
  height: 120px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>