import * as actionTypes from './actionTypes'
import CountrySearchApiService from '../services/CountrySearchApiService'

const searchApi = new CountrySearchApiService()

const setSelectedCountry = selectedCountry => {
  return {
    type: actionTypes.SET_SELECTED_COUNTRY,
    selectedCountry
  }
}
const setCountries = countries => {
  return {
    type: actionTypes.SET_COUNTRIES,
    countries
  }
}
const setSearchText = (searchText = '') => {
  return {
    type: actionTypes.SET_SEARCH_TEXT,
    searchText
  }
}
const setShowingList = showList => {
  return {
    type: actionTypes.SET_SHOWING_LIST,
    showList
  }
}
const searchCountries = () => {
  return async (dispatch, getState) => {
    const { appReducer: { searchText = '' } = {} } = getState()
    const countries = await searchApi.getCountries(searchText)
    dispatch(setCountries(countries))
    const showList = countries !== null
    dispatch(setShowingList(showList))
  }
}

export {
  setCountries,
  searchCountries,
  setSelectedCountry,
  setSearchText,
  setShowingList
}
