import * as actionTypes from './actionTypes'

const initialState = {
  countries: null,
  selectedCountry: null,
  searchText: '',
  showList: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_COUNTRY:
      const { selectedCountry } = action
      return {
        ...state,
        selectedCountry
      }
    case actionTypes.SET_COUNTRIES:
      const { countries } = action
      return {
        ...state,
        countries
      }
    case actionTypes.SET_SEARCH_TEXT:
      const { searchText } = action
      return {
        ...state,
        searchText
      }
    case actionTypes.SET_SHOWING_LIST:
      const { showList } = action
      return {
        ...state,
        showList
      }
    default:
      return state
  }
}
export default reducer
