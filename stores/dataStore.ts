export const useDataStore = defineStore('interfaceStore', {
  state: () => ({}),

  actions: {
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
}