<template>
  <q-page class="q-pa-md">
    <h4 class="text-h4 q-mb-md">Explore GIFs Populares e Pesquise!</h4>

    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-9 col-md-10">
        <q-input
          v-model="searchQuery"
          label="Buscar GIFs..."
          outlined
          dense
          @keyup.enter="performSearch"
          clearable
          @clear="clearSearch"
        >
          <template v-slot:append>
            <q-icon v-if="searchQuery === ''" name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-2">
        <q-btn
          label="Buscar"
          color="primary"
          class="full-width"
          @click="performSearch"
          :disable="gifStore.isLoading"
        />
      </div>
    </div>

    <div v-if="gifStore.isLoading" class="text-center q-py-lg">
      <q-spinner
        color="primary"
        size="3em"
      />
      <p class="q-mt-sm">Carregando GIFs...</p>
    </div>

    <div v-if="gifStore.error" class="text-center text-red q-py-lg">
      <q-icon name="error" size="2em" />
      <p class="q-mt-sm">{{ gifStore.error }}</p>
    </div>

    <div v-else class="row q-col-gutter-md">
      <div
        v-for="gif in displayedGifs"
        :key="gif.id"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 flex flex-center"
      >
        <GifCard :gif="gif" />
      </div>
    </div>

    <div v-if="!gifStore.isLoading && !gifStore.error && displayedGifs.length === 0" class="text-center q-py-lg text-grey-7">
      <p>Nenhum GIF encontrado para sua busca. Tente outro termo!</p>
    </div>

  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useGifStore } from 'src/stores/gifStore';
import GifCard from 'src/components/GifCard.vue'; 

// Acessa o store de GIFs
const gifStore = useGifStore();

// Variável reativa para o termo de pesquisa
const searchQuery = ref('');

// Propriedade computada para determinar quais GIFs exibir (trending ou busca)
const displayedGifs = computed(() => {
  return gifStore.currentSearchQuery ? gifStore.searchResults : gifStore.trendingGifs;
});

// Ação para realizar a busca de GIFs
const performSearch = async () => {
  if (searchQuery.value.trim() === '') {
    // Se a busca estiver vazia, volta para os trending GIFs
    gifStore.fetchTrendingGifs();
  } else {
    await gifStore.fetchGifsBySearch(searchQuery.value);
  }
};

// Ação para limpar a busca e voltar para os trending GIFs
const clearSearch = () => {
  searchQuery.value = '';
  gifStore.fetchTrendingGifs();
};

// Ao montar o componente, carrega os GIFs em tendência
onMounted(() => {
  // Verifica se já há GIFs carregados para evitar nova requisição desnecessária
  if (gifStore.trendingGifs.length === 0 && !gifStore.currentSearchQuery) {
    gifStore.fetchTrendingGifs();
  }
});
</script>

<style scoped>
</style>