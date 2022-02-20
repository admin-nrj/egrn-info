import React from 'react';
import OpenFileButton from "../OpenFileButton/OpenFileButton";
import s from './header.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Header() {
    // @ts-ignore
    const file:File | undefined = useTypedSelector(state=>state.egrnInfoData.openFile);

    return (
        <header className={s.header}>
            <OpenFileButton/>
            <div className={s.label}> { file? file.name:''}</div>
        </header>
    );
}

export default Header;