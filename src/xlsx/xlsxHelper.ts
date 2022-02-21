import * as XLSX from "xlsx";
import {CN, EgrnData} from "../types/egrnInfoReucerTypes";
export const xlsxHelper = {
    getArrayFromXlFile: async (file: File): Promise<Array<CN>> => {

        const dataArr = await file.arrayBuffer();
        const wb = XLSX.read(dataArr);
        const wsName = wb.SheetNames[0]
        const ws = wb.Sheets[wsName];
        // const data = XLSX.utils.sheet_to_json(ws, {header:1});
        const data = XLSX.utils.sheet_to_json(ws, {header: ["CN_dirty"]});
        return prepareArray(data)
    },
    saveXLFileFromArray: async (arr : Array<EgrnData>) =>{
        let finalHeaders = [{cn:'КН пересечения', parentId:'КН ЕЗП', areaValue:'Площадь', address:'Адрес', areaType:'Категория земель', utilType:'Назначение'}];

        let ws = XLSX.utils.json_to_sheet([...finalHeaders,...arr], {skipHeader:true});
        let wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "EgrnInfo")
        let exportFileName = `workbook_egrn_info.xls`;
        XLSX.writeFile(wb, exportFileName)
    }
}

function prepareArray(data: any): Array<CN> {
    let unic = {}

    data.forEach((c: any) => {
        let cn=clearCN(c.CN_dirty)

        if (cn.length>0)
            {
                // @ts-ignore
                unic[cn]=cn;
            }
    })

    return Object.keys(unic).map(k=>({cn:k}));
}

function clearCN(cn: string): string {

    let tmpPart = ""
    let brPos = cn.indexOf("(");
    if (brPos>0)
        cn = cn.substring(0,brPos)

    const cnArr = cn.split(":")
    if (cnArr.length < 2)
        return ""

    return cnArr.map(cnPart=>{
        for (let j = 0; j < cnPart.length; j++) {
            tmpPart = ""
            let s = cnPart.substring(j,j+1);
            if ( s !== "0") {
                tmpPart = cnPart.substring(j,cnPart.length)
                break;
            }
        }
        if (tmpPart === "") tmpPart = "0"
        return tmpPart
    }).join(":");
}