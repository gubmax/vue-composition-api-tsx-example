import { Module } from 'vuex'

import { IStoreState } from '@/store/store.interface' // eslint-disable-line import/no-cycle

export interface IStoreMainModuleState {
  msg: string,
  responseData: any,
}

export type TMainStoreModule = Module<IStoreMainModuleState, IStoreState>
