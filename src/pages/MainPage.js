import React from 'react';

import {LeftColumn, RightColumn, SearchForm} from './../modules';

import './MainPage.scss';

const MainPage = () => {
    return (
        <div className="app-wrapper">
            <LeftColumn />
            <RightColumn />
            <SearchForm />
        </div>
    )
}

export default MainPage;