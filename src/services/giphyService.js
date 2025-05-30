import axios from 'axios'

// Sua chave de API do GIPHY.
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY

// URL base da API do GIPHY
const GIPHY_BASE_URL = 'https://api.giphy.com/v1'

// Cria uma instância do Axios
const giphyApi = axios.create({
  baseURL: GIPHY_BASE_URL,
  params: {
    api_key: GIPHY_API_KEY,
  },
})

/**
 * Busca GIFs em tendência.
 * @param {number} limit - Número de GIFs a retornar.
 * @param {number} offset - Offset para paginação.
 * @returns {Promise<object>} Dados da resposta da API.
 */
export const getTrendingGifs = async (limit = 25, offset = 0) => {
  try {
    const response = await giphyApi.get('/gifs/trending', {
      params: {
        limit,
        offset,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar GIFs em tendência:', error)
    throw error
  }
}

/**
 * Busca GIFs por termo de pesquisa.
 * @param {string} query - Termo de pesquisa.
 * @param {number} limit - Número de GIFs a retornar.
 * @param {number} offset - Offset para paginação.
 * @returns {Promise<object>} Dados da resposta da API.
 */
export const searchGifs = async (query, limit = 25, offset = 0) => {
  try {
    const response = await giphyApi.get('/gifs/search', {
      params: {
        q: query,
        limit,
        offset,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar GIFs:', error)
    throw error
  }
}

/**
 * Busca categorias de GIFs.
 * @returns {Promise<object>} Dados das categorias da API.
 */
export const getGifCategories = async () => {
  try {
    const response = await giphyApi.get('/gifs/categories')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    throw error
  }
}

export const getGifsByCategory = async (categoryName, limit = 25, offset = 0) => {
  // O GIPHY API não tem um endpoint direto para 'gifs por category ID'.
  // Foi usado o endpoint de busca com o nome da categoria.
  return searchGifs(categoryName, limit, offset)
}

export default giphyApi
