import React from 'react';
import './loader.css'

interface propTypes {
    isActive: boolean
}

function Loader({isActive}: propTypes) {

    return (
        <div className={isActive ? 'container active' : 'hide'}>
            <div className={'loader'}>
                <div className="lds-roller">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    );
}

export default Loader;