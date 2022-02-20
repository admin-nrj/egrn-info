import { Dispatch } from "redux"
import {xlsxHelper} from "../../xlsx/xlsxHelper";
import {egrnInfoActions} from "../reucers/egrnInfoReducer";

export const egrnInfoAsyncActions={
    loadExcelData : (file: File) => {
        return function (dispatch : Dispatch) {
            xlsxHelper.getArrayFromXlFile(file)
                .then( r => {
                    dispatch(egrnInfoActions.SetInitialCNArrayAC(r))
                }
            )
        }
    }
}