import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import './LanguageSwitcher.scss'
class LanguageSwitcher extends Component {
  render() {
    const { locales, selectedLocale, setLocale } = this.props
    const languages = locales.map(locale => {
      const isActive = locale.code === selectedLocale
      const className = `lang-switcher__item ${
        isActive ? 'lang-switcher__item--active' : ''
      }`
      return (
        <li
          className={className}
          key={locale.code}
          onClick={() => setLocale(locale.code)}
        >
          {locale.code}
        </li>
      )
    })

    return <ul className="lang-switcher">{languages}</ul>
  }
}

const mapStateToProps = state => {
  const { translations, locale } = state.i18n
  const locales = Object.keys(translations).map(locale => {
    return {
      label: locale.toUpperCase(),
      code: locale
    }
  })
  return {
    locales,
    selectedLocale: locale
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setLocale: locale => {
      localStorage.setItem('_searchCountryAppLocale', locale)
      dispatch(setLocale(locale))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
