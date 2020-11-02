import React from 'react';

import './SearchForm.scss';

const SearchForm = () => {
    return (
      <div className="app-search-panel">
        <div className="search-panel__header">
          <button className="search-panel__close">
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="search-panel__form">
          <input type="text" placeholder="search location" className="input" />
          <button className="btn btn-search-panel">Search</button>
        </div>
        <div className="search-panel__history">
          <div className="history__item">
            London
            <div className="history__item-arrow">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="history__item">
            London
            <div className="history__item-arrow">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="history__item">
            London
            <div className="history__item-arrow">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SearchForm;