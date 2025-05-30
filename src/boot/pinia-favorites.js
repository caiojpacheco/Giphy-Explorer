import { boot } from 'quasar/wrappers'
import { useFavoritesStore } from 'src/stores/favoritesStore'

export default boot(({ store }) => {
  // Acessa o store de favoritos
  const favoritesStore = useFavoritesStore(store)
  // Carrega os favoritos do LocalStorage
  favoritesStore.loadFavorites()
})
