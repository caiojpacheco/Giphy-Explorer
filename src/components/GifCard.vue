<template>
  <q-card class="gif-card relative-position cursor-pointer" @click="openGifInNewTab(gif.url)">
    <q-img
      :src="gif.images.fixed_height.url"
      :alt="gif.title"
      :ratio="1"
      class="rounded-borders"
      loading="lazy"
    >
      <div class="absolute-bottom text-subtitle2 text-center q-pa-xs">
        {{ gif.title || 'Sem Título' }}
      </div>
    </q-img>

    <q-btn
      round
      :icon="isFavorite ? 'favorite' : 'favorite_border'"
      :color="isFavorite ? 'red' : 'white'"
      :text-color="isFavorite ? 'white' : 'red'"
      size="md"
      class="absolute-top-right q-ma-xs"
      @click.stop="toggleFavorite"
    />
  </q-card>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useFavoritesStore } from 'src/stores/favoritesStore';

// Define as propriedades que o componente GifCard pode receber
const props = defineProps({
  gif: {
    type: Object,
    required: true,
  },
});

// Acessa o store de favoritos do Pinia
const favoritesStore = useFavoritesStore();

// Computa se o GIF atual é um favorito
const isFavorite = computed(() => favoritesStore.isFavorite(props.gif.id));

// Função para adicionar/remover o GIF dos favoritos
const toggleFavorite = () => {
  if (isFavorite.value) {
    favoritesStore.removeFavorite(props.gif.id);
  } else {
    favoritesStore.addFavorite(props.gif);
  }
};

// Função para abrir o GIF em uma nova aba ao clicar no card
const openGifInNewTab = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<style scoped>
/* Estilos para o card do GIF */
.gif-card {
  width: 100%;
  max-width: 300px; 
  margin: auto; 
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.gif-card:hover {
  transform: translateY(-5px);
}

.q-img {
  height: 200px;
  object-fit: cover; 
}

.absolute-bottom {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px;
}
</style>