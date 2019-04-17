import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: '',
  },
  mutations: {
    changeSearchText (state, text) {
      state.searchText = text
    }
  },
  actions: {
    changeSearchText ({ commit }, payload) {
      commit('changeSearchText', payload)
    }
  }
})
