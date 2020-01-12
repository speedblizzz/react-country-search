import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedCountry, setShowingList } from '../../store/actionCreators'

import './SearchList.scss'
const NotFoundList = ({ text }) => {
  return (
    <ul className="search-list">
      <li className="search-list__item search-list__item--disabled">{text}</li>
    </ul>
  )
}
class SearchList extends Component {
  render() {
    const { countries, notFoundText, showList, onSelectCountry, hasError } = this.props

    if (hasError || !countries || !showList) return null

    if (countries.length === 0) return <NotFoundList text={notFoundText} />

    const list = countries.map(item => {
      const { id, name } = item
      return (
        <li
          className="search-list__item"
          key={id}
          onClick={() => onSelectCountry(item)}
        >
          {name}
        </li>
      )
    })

    return <ul className="search-list">{list}</ul>
  }
}
const mapStateToProps = state => {
  try {
    const { countries, showList } = state.appReducer,
      { translations, locale } = state.i18n,
      currentLocale = translations[locale]
    const { application: { notFoundText = '' } = {} } = currentLocale
    return {
      countries,
      showList,
      notFoundText
    }
  } catch (error) {
    console.error(error)
    return {
      hasError: true
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectCountry: country => {
      dispatch(setSelectedCountry(country))
      dispatch(setShowingList(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
