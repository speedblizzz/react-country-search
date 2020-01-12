import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchCountries,
  setSearchText,
  setShowingList
} from '../../store/actionCreators'
import './SearchInput.scss'

class SearchInput extends Component {
  onTypeText = event => {
    const text = event.target.value,
      { onSearchCountries, onSetSearchText } = this.props

    onSetSearchText(text)

    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(() => {
      onSearchCountries()
    }, 300)
  }
  render() {
    const { searchPlaceholder, searchText, onFocus, onBlur } = this.props
    return (
      <input
        className="search-input"
        placeholder={searchPlaceholder}
        value={searchText}
        onChange={this.onTypeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}

const mapStateToProps = state => {
  try {
    const { translations, locale } = state.i18n,
      { searchText } = state.appReducer,
      currentLocale = translations[locale]
    const { application: { searchPlaceholder = '' } = {} } = currentLocale
    return {
      searchPlaceholder,
      searchText
    }
  } catch (error) {
    console.error(error)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchCountries: () => {
      dispatch(searchCountries())
    },
    onSetSearchText: text => {
      dispatch(setSearchText(text))
    },
    onFocus: () => {
      dispatch(setShowingList(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
