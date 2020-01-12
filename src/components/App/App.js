import React, { Component } from 'react'
import './App.scss'
import LanguageSwitcher from '../LanguageSwitcher'
import AppHeader from '../AppHeader'
import SearchBox from '../SearchBox'
import CountryCard, { CountryCardField } from '../CountryCard'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <LanguageSwitcher />
        <AppHeader />
        <SearchBox />
        <CountryCard>
          <CountryCardField field="name" />
          <CountryCardField field="capital" />
          <CountryCardField field="population" />
        </CountryCard>
      </div>
    )
  }
}
