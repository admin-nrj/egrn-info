import React from 'react';
import OpenFileButton from "../OpenFileButton/OpenFileButton";
import s from './header.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SaveExcelButton from "../SaveXLButton/SaveExcelButton";

function Header() {
    const file = useTypedSelector(state => state.egrnInfoData.openFile);

    return (
        <>
            <header className={s.header}>
                <OpenFileButton/>
                <SaveExcelButton/>
            </header>
            <div className={s.label}> {file ? file.name : ''}</div>
        </>
    );
}

export default Header;