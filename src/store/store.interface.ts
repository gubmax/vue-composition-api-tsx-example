import { Store } from 'vuex'

import { IStoreMainModuleState } from './main/main.interface' // eslint-disable-line import/no-cycle

export interface IStoreState {
  main: IStoreMainModuleState,
}

export type TStore = Store<IStoreState>
