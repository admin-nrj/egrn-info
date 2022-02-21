import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
    return (
        <>
            <Header/>
            <main className={'main'}>
                <Table/>
            </main>
        </>
    );
}

export default App;
