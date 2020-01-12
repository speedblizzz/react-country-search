import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer
} from 'react-redux-i18n'

import translations from './translations'
import appReducer from './appReducer'

const store = createStore(
  combineReducers({
    appReducer,
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
)
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))

const defaultLocale = localStorage.getItem('_searchCountryAppLocale') || 'en'
store.dispatch(setLocale(defaultLocale))

export default store
