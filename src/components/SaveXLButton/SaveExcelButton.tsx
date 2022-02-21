import React from 'react';
import s from "../OpenFileButton/OpenFileButton.module.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {xlsxHelper} from "../../xlsx/xlsxHelper";


function SaveExcelButton() {
    const egrnDataArr = useTypedSelector(state => state.egrnInfoData.areaEgrnData)

    const onClickHandler = () =>{
        if (egrnDataArr)
            xlsxHelper.saveXLFileFromArray(egrnDataArr).then(()=>console.log("saved"));
    }
    return (
        <div>
            <button disabled={!egrnDataArr} className={s.openFileButton} onClick={onClickHandler}>Save .xlsx</button>
        </div>
    );
}

export default SaveExcelButton;