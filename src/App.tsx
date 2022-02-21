import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Loader from "./components/Loader/Loader";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
    const {isLoading} = useTypedSelector(state => state.egrnInfoData)
    return (
        <>
            <Loader isActive={isLoading}/>
            <Header/>
            <main className={'main'}>
                <Table/>
            </main>

        </>
    );
}

export default App;
