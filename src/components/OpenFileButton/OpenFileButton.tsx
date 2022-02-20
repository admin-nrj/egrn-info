import React, {useRef} from 'react';
import s from './OpenFileButton.module.css';
// import XLSX from 'xlsx';
import * as XLSX from 'xlsx';

function OpenFileButton() {
    const inputFile = useRef<HTMLInputElement | null>(null);

    const onClickHandler = () =>{
        inputFile.current?.click();
    }
    const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.target.files){
            let file = event.target.files[0];
            console.log(file);
            //this.setState({file}); /// if you want to upload latter

            const dataArr = await file.arrayBuffer();
            const wb = XLSX.read(dataArr);
            const wsname = wb.SheetNames[0]
            const ws = wb.Sheets[wsname];
            // const data = XLSX.utils.sheet_to_json(ws, {header:1});
            const data = XLSX.utils.sheet_to_json(ws,{header:0});

            // console.log("Data>>>" + data);
            console.log("Data>>>" + JSON.stringify(data));

            // let name = file.name;
            // const reader = new FileReader();
            // reader.onload = (evt) => { // evt = on_file_select event
            //     /* Parse data */
            //     const bstr = evt.target.result;
            //     const wb = XLSX.read(bstr, {type:'binary'});
            //     /* Get first worksheet */
            //     const wsname = wb.SheetNames[0];
            //     const ws = wb.Sheets[wsname];
            //     /* Convert array of arrays */
            //     const data = XLSX.utils.sheet_to_csv(ws, {header:1});
            //     /* Update state */
            //     console.log("Data>>>"+data);
            // };
            // reader.readAsBinaryString(file);
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