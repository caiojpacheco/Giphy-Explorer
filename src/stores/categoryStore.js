import { defineStore } from 'pinia'
import { getGifCategories } from 'src/services/giphyService'
import { searchGifs } from 'src/services/giphyService'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    gifsByCategory: [],
    currentCategory: null,
    isLoadingCategories: false,
    isLoadingCategoryGifs: false,
    error: null,
  }),
  actions: {
    /**
     * Busca todas as categorias de GIFs da GIPHY API.
     */
    async fetchCategories() {
      this.isLoadingCategories = true
      this.error = null
      try {
        const data = await getGifCategories()
        this.categories = data.data
      } catch (err) {
        this.error = 'Falha ao carregar categorias.'
        console.error(err)
      } finally {
        this.isLoadingCategories = false
      }
    },

    /**
     * Busca GIFs para uma categoria específica.
     * @param {string} categoryName - O nome da categoria.
     */
    async fetchGifsForCategory(categoryName) {
      if (!categoryName) {
        this.gifsByCategory = []
        this.currentCategory = null
        return
      }
      this.isLoadingCategoryGifs = true
      this.error = null
      this.currentCategory = categoryName
      try {
        const data = await searchGifs(categoryName)
        this.gifsByCategory = data.data
      } catch (err) {
        this.error = `Falha ao carregar GIFs para a categoria ${categoryName}.`
        console.error(err)
      } finally {
        this.isLoadingCategoryGifs = false
      }
    },
  },
  getters: {
    allCategories: (state) => state.categories,
    getCurrentCategoryGifs: (state) => state.gifsByCategory,
  },
})
