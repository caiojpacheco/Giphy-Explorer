import { defineStore } from 'pinia'
import { getTrendingGifs, searchGifs } from 'src/services/giphyService'

export const useGifStore = defineStore('gif', {
  state: () => ({
    trendingGifs: [],
    searchResults: [],
    currentSearchQuery: '',
    isLoading: false,
    error: null,
  }),
  actions: {
    /**
     * Busca os GIFs em tendência da GIPHY API.
     */
    async fetchTrendingGifs() {
      this.isLoading = true
      this.error = null
      try {
        const data = await getTrendingGifs()
        this.trendingGifs = data.data // A API do GIPHY retorna os GIFs em data.data
      } catch (err) {
        this.error = 'Falha ao carregar GIFs em tendência.'
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Busca GIFs com base em um termo de pesquisa.
     * @param {string} query
     */
    async fetchGifsBySearch(query) {
      if (!query.trim()) {
        this.searchResults = []
        this.currentSearchQuery = ''
        return
      }
      this.isLoading = true
      this.error = null
      this.currentSearchQuery = query
      try {
        const data = await searchGifs(query)
        this.searchResults = data.data
      } catch (err) {
        this.error = 'Falha ao buscar GIFs.'
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },
  },
  getters: {
    getAllGifs: (state) => {
      return state.currentSearchQuery ? state.searchResults : state.trendingGifs
    },
  },
})
