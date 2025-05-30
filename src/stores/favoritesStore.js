import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

const FAVORITES_KEY = 'giphy_favorites'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    // Ação para carregar favoritos do LocalStorage ao iniciar o store
    loadFavorites() {
      // O plugin LocalStorage do Quasar é usado aqui para persistir dados
      const storedFavorites = LocalStorage.getItem(FAVORITES_KEY)
      if (storedFavorites) {
        this.favorites = storedFavorites
      }
    },

    /**
     * Adiciona um GIF à lista de favoritos.
     * @param {object} gif - O objeto GIF a ser adicionado.
     */
    addFavorite(gif) {
      if (!this.isFavorite(gif.id)) {
        this.favorites.push(gif)
        this.saveFavorites() // Salva no LocalStorage após adicionar
      }
    },

    /**
     * Remove um GIF da lista de favoritos.
     * @param {string} gifId - O ID do GIF a ser removido.
     */
    removeFavorite(gifId) {
      this.favorites = this.favorites.filter((gif) => gif.id !== gifId)
      this.saveFavorites() // Salva no LocalStorage após remover
    },

    /**
     * Salva a lista de favoritos no LocalStorage.
     * (Esta é uma ação interna, chamada por addFavorite e removeFavorite)
     */
    saveFavorites() {
      // O plugin LocalStorage do Quasar é usado aqui para persistir dados
      LocalStorage.set(FAVORITES_KEY, this.favorites)
    },
  },
  getters: {
    /**
     * Verifica se um GIF é favorito.
     * @param {string} gifId - O ID do GIF a ser verificado.
     * @returns {boolean} True se for favorito, false caso contrário.
     */
    isFavorite: (state) => (gifId) => {
      return state.favorites.some((gif) => gif.id === gifId)
    },
    // Retorna todos os favoritos
    allFavorites: (state) => state.favorites,
  },
})
