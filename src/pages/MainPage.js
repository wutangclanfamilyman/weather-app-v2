import React from 'react';

import {LeftColumn, RightColumn} from './../modules';

import './MainPage.scss';

const MainPage = () => {
    return (
        <div className="app-wrapper">
            <LeftColumn />
            <RightColumn />
        </div>
    )
}

export default MainPage;