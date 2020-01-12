export default class CountrySearchApiService {
  _apiBaseUrl = 'https://restcountries.eu/rest/v2'

  getResource = async url => {
    const res = await fetch(`${this._apiBaseUrl}${url}`)
    if (!res.ok) {
      console.error(`Could not fetch ${url}, received ${res.status}`)
      return []
    }
    return await res.json()
  }

  getCountries = async searchText => {
    const text = searchText.trim()
    const countries = text.length ? await this.getResource(`/name/${text}`) : null
    return countries ? countries.map(this._transformCountry) : null
  }
  _transformCountry = country => {
    return {
      id: this._extractId(country),
      name: country.name,
      flag: country.flag,
      capital: country.capital,
      population: country.population
    }
  }
  _extractId = country => {
    return country.numericCode
  }
}
