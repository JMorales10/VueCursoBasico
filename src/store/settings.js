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
    fetch(MOCK_URL)
    .then(response => response.json())
    // eslint-disable-next-line no-console
    .then(data => console.log(data))
  },
}

export default {
  state: stateObj,
  getters,
  mutations,
  actions,
}
