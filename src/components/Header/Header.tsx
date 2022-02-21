import React from 'react';
import OpenFileButton from "../OpenFileButton/OpenFileButton";
import s from './header.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SaveExcelButton from "../SaveXLButton/SaveExcelButton";

function Header() {
    const {openFile} = useTypedSelector(state => state.egrnInfoData);

    return (
        <>
            <header className={s.header}>
                <OpenFileButton />
                <SaveExcelButton/>
            </header>
            <div className={s.label}> {openFile ? openFile.name : ''}</div>
        </>
    );
}

export default Header;