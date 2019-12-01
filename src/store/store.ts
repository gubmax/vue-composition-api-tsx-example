import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import main from './main'
import { IStoreState } from './store.interface'

Vue.use(Vuex)

const store = new Store<IStoreState>({
  modules: {
    main,
  },
})

export default store
