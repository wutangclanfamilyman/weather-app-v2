import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {userActions} from '../../redux/actions'
import {LocalStorageController} from '../../helpers'
import './SearchForm.scss';

const SearchForm = ({searchPanel, toggleSearchForm, setCurrentCity}) => {

    const [inputCity, setCity] = useState('')
    const [history, setHistory] = useState(null)

    const localStorageController = new LocalStorageController();

    useEffect(() => {
      setHistory(localStorageController.getItems())
    })

    return (
      <div className={classNames('app-search-panel', {'app-search-panel--active': searchPanel})}>
        <div className="search-panel__header">
          <button className="search-panel__close" onClick={() => {toggleSearchForm()}}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="search-panel__form">
          <input type="text" placeholder="search location" className="input" onChange={(e) => {setCity(e.target.value)}} />
          <button className="btn btn-search-panel" onClick={() => {setCurrentCity(inputCity); localStorageController.addItem(inputCity); toggleSearchForm(); setCity('')}}>Search</button>
        </div>
        <div className="search-panel__history">
          {
            history && history.map((item, index) => {
              return (<div className="history__item" key={index} onClick={() => {setCurrentCity(item); toggleSearchForm()}}>
                {item}
                <div className="history__item-arrow">
                  <span></span>
                  <span></span>
                </div>
              </div>)
            })
          }
        </div>
      </div>
    )
}

SearchForm.propTypes = {
  searchPanel: PropTypes.bool,
  toggleSearchForm: PropTypes.func,
  setCurrentCity: PropTypes.func,
  onSubmit: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    searchPanel: state.user.searchPanel
  }
}
const mapDispatchToProps = {
  toggleSearchForm: userActions.toggleSearchForm,
  setCurrentCity: userActions.setCurrentCity
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);