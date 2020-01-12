import React from 'react'
import { connect } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import './CountryCard.scss'

const CountryCardField = ({ item, field }) => {
  return (
    <li className="country-card__row">
      <Translate
        className="country-card__field"
        value={`selectedCountry.${field}`}
      />
      <span className="country-card__value">{item[field]}</span>
    </li>
  )
}

export { CountryCardField }

const CountryCard = ({ selectedCountry, children }) => {
  if (!selectedCountry) return null
  return (
    <div className="country-card">
      <img
        className="country-card__flag"
        src={selectedCountry.flag}
        alt={selectedCountry.name}
      />
      <ul className="country-card__container">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { item: selectedCountry })
        })}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  const { selectedCountry } = state.appReducer
  return {
    selectedCountry
  }
}

export default connect(mapStateToProps)(CountryCard)
