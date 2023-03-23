import axios from 'axios'

const MOCK_URL = 'https://jsonplaceholder.typicode.com/todos/1'

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
  fetchModulePermissions () {
    return new Promise((resolve, reject) => {
      axios.get(MOCK_URL)
      .then((modulePermissions) => {
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
