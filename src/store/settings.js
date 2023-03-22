const MOCK_URL = 'https://jsonplaceholder.typicode.com/posts/1'

const stateObj = {
  modulePermissions: null,
}

const getters = {
  getModulePermissions (state) {
    return state.modulePermissions
  },
  getModulePermissionsByField: (state) => (field='body') => {
    return state.modulePermissions ? state.modulePermissions[field] : null
  },
}

const mutations = {
  setModulePermissions (state, permissions) {
    state.modulePermissions = permissions
  },
}

const actions = {
  fetchModulePermissions ({ commit }) {
    return new Promise((resolve, reject) => {
      fetch(MOCK_URL)
      .then((modulePermissions) => {
        commit('setModulePermissions', modulePermissions)
        resolve(modulePermissions)
      })
      .catch(e => reject(e))
    })
  },
}

export default {
  state: stateObj,
  getters,
  mutations,
  actions,
}
