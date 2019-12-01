import { provide, inject } from '@vue/composition-api'
import { GetterTree, Dispatch } from 'vuex'

import { TStore, IStoreState } from '@/store/store.interface'

const StoreSymbol = Symbol('Store symbol')

const provideStore = (store: TStore) => {
  provide(StoreSymbol, store)
}

const useStore = (): [GetterTree<IStoreState, IStoreState>, Dispatch] => {
  const { getters, dispatch } = inject<TStore>(StoreSymbol) as TStore
  return [getters, dispatch]
}


export { provideStore, useStore }
