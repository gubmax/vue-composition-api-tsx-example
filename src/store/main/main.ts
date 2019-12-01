import { TMainStoreModule } from './main.interface'

const mainStoreModule: TMainStoreModule = {
  state: {
    msg: 'This text from store!',
  },
  getters: {
    mainMsg: (state) => state.msg,
  },
  mutations: {
    changeMsg(state) {
      state.msg += '!'
    },
  },
  actions: {
    changeMsg({ commit }) {
      commit('changeMsg')
    },
  },
}

export default mainStoreModule
