import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState
type AppDispatch = typeof store.dispatch
export type IRootState = ReturnType<GetStateFnType>
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const shallowEqualApp = shallowEqual

export default store
