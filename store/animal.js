export const state = () => ({
  imageUrl:
    'https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
})
export const getters = {
  getImageUrl(state) {
    return state.imageUrl
  },
}
export const mutations = {
  changeUrl(state, payload) {
    state.imageUrl = payload.message
  },
}

export const actions = {
  async obtainUrl({ commit }) {
    try {
      const data = await this.$axios.$get('https://dog.ceo/api/breeds/image/random')
      commit('changeUrl', data)
    } catch (error) {
      window.alert('there is an ' + error)
    }
  },
}
