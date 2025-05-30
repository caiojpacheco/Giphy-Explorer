<template>
  <q-page class="q-pa-md">
    <h4 class="text-h4 q-mb-md">Meus GIFs Favoritos</h4>

    <div v-if="favoritesStore.allFavorites.length === 0" class="text-center q-py-lg text-grey-7">
      <p>Você ainda não adicionou nenhum GIF aos favoritos. Adicione alguns na página Home!</p>
      <q-btn label="Explorar GIFs" color="primary" flat :to="{ name: 'home' }" class="q-mt-md" />
    </div>

    <div v-else class="row q-col-gutter-md">
      <div
        v-for="gif in favoritesStore.allFavorites"
        :key="gif.id"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 flex flex-center"
      >
        <GifCard :gif="gif" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useFavoritesStore } from 'src/stores/favoritesStore';
import GifCard from 'src/components/GifCard.vue';

// Acessa o store de favoritos
const favoritesStore = useFavoritesStore();
</script>

<style scoped>
</style>