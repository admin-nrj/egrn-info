import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Header/>
                <main className={'main'}>
                    Table
                </main>
            </Provider>
        </>
    );
}

export default App;
