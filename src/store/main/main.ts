import { TMainStoreModule } from './main.interface'

const mainStoreModule: TMainStoreModule = {
  state: {
    msg: 'This text from store!',
    responseData: null,
  },
  getters: {
    mainMsg: (state) => state.msg,
    responseData: (state) => state.responseData,
  },
  mutations: {
    changeMsg(state) {
      state.msg += '!'
    },
    setResponseData(state, payload) {
      state.responseData = payload
    },
  },
  actions: {
    changeMsg({ commit }) {
      commit('changeMsg')
    },
    setResponseData({ commit }, data) {
      commit('setResponseData', data)
    },
  },
}

export default mainStoreModule
