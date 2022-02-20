import * as XLSX from "xlsx";
import {CN} from "../types/egrnInfoReucerTypes";
export const xlsxHelper = {
    getArrayFromXlFile: async (file: File): Promise<Array<CN>> => {

        const dataArr = await file.arrayBuffer();
        const wb = XLSX.read(dataArr);
        const wsName = wb.SheetNames[0]
        const ws = wb.Sheets[wsName];
        // const data = XLSX.utils.sheet_to_json(ws, {header:1});
        const data = XLSX.utils.sheet_to_json(ws, {header: ["CN_dirty"]});
        return prepareArray(data)
    }
}

function prepareArray(data: any): Array<CN> {
    let unic = {}

    data.forEach((c: any) => {
        let cn=clearCN(c[Object.keys(c)[0]])

        if (cn.length>0)
            { // @ts-ignore
                unic[cn]=cn;
            }
    })

    return Object.keys(unic).map(k=>({cn:k}));
}

function clearCN(cn: string): string {
    let tmpPart = ""
    const brPos = cn.indexOf("(");
    cn = cn.substring(0,brPos)

    const cnArr = cn.split(":")
    if (cnArr.length < 2)
        return ""

    return cnArr.map(cnPart=>{
        for (let j = 0; j < cnPart.length-1; j++) {
            tmpPart = ""
            let s = cnPart.substring(j,j+1);
            if ( s !== "0") {
                tmpPart = cnPart.substring(j,cnPart.length - j + 1)
                break;
            }
        }
        if (tmpPart === "") tmpPart = "0"
        return tmpPart
    }).join(":");
}