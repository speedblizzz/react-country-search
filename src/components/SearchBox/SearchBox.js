import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setShowingList } from '../../store/actionCreators'
import './SearchBox.scss'
import SearchInput from '../SearchInput'
import SearchList from '../SearchList'

class SearchBox extends Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  }
  setWrapperRef = node => {
    this.wrapperRef = node
  }
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClickOutside()
    }
  }
  render() {
    return (
      <div className="search-box" ref={this.setWrapperRef}>
        <SearchInput />
        <SearchList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickOutside: () => {
      dispatch(setShowingList(false))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox)
