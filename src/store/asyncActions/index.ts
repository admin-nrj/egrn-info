import { Dispatch } from "redux"
import {xlsxHelper} from "../../xlsx/xlsxHelper";
import {egrnInfoActions} from "../reucers/egrnInfoReducer";
import {EgrnData} from "../../types/egrnInfoReucerTypes";
import {staticListData} from "../../staticListData/staticListData";

async function fetchDataFromEgrnApi(cn: string) {

    return fetch(`https://pkk.rosreestr.ru/api/features/1/${cn}`)
        .then(response => response.json())
        .then(data => {
            return data
        });
}

export const egrnInfoAsyncActions={
    loadExcelData : (file: File) => {
        return function (dispatch : Dispatch) {
            xlsxHelper.getArrayFromXlFile(file)
                .then( arr => {
                    dispatch(egrnInfoActions.SetInitialCNArrayAC(arr))
                    return arr
                }
            ).then(
                (arr:Array<EgrnData>) => {
                    arr.forEach(async (area:EgrnData)=> {
                            if (area.cn){
                                let egrnData = await fetchDataFromEgrnApi(area.cn);

                                let parentId = egrnData?.feature?.attrs?.parent_id
                                if (parentId){
                                    console.log(parentId)
                                    egrnData = await fetchDataFromEgrnApi(parentId);
                                }

                                if (egrnData?.feature?.attrs){
                                    area.parentId = parentId
                                    area.areaValue = parseInt(egrnData.feature.attrs.area_value)
                                    area.address = egrnData.feature.attrs.address
                                    area.areaType = staticListData.getAreaType(egrnData.feature.attrs.category_type)
                                    area.utilType = staticListData.getAreaUtilType(egrnData.feature.attrs.util_code)
                                    dispatch(egrnInfoActions.SetDataFromEGRN(area))
                                }

                            }
                        }
                    )
                }
            )
        }
    }
}