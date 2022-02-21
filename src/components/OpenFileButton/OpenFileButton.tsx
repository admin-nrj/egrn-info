import React, {useRef} from 'react';
import s from './OpenFileButton.module.css';
import {useDispatch} from "react-redux";
import {egrnInfoActions} from "../../store/reucers/egrnInfoReducer";
import {egrnInfoAsyncActions} from "../../store/asyncActions";

function OpenFileButton() {
    const inputFile = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch()

    const onClickHandler = () =>{
        inputFile.current?.click();

    }
    const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.target.files){
            let file = event.target.files[0];
            dispatch(egrnInfoActions.SetOpenFileAC(file));
            if (file){
                dispatch(egrnInfoActions.SetIsLoadingAC(true));
                dispatch(egrnInfoAsyncActions.loadExcelData(file));
            }

        }
    }

    return (
        <>
            <button className={s.openFileButton} onClick={onClickHandler}>Open .xlsx</button>
            <input type='file' accept=".xls, .xlsx " ref={inputFile} style={{display: 'none'}} onChange={onChangeFile}/>
        </>
    );
}

export default OpenFileButton;