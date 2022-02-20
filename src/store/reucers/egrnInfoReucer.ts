import {
    CN,
    EgrnActionsEnum,
    EgrnInfo,
    EgrnInfoActions,
    SetInitialCNArray,
    SetOpenFile
} from "../../types/egrnInfoReucerTypes";

const defState : EgrnInfo ={
    openFile: undefined,
    egrnData : null
}


export const egrnInfoReucer = (state = defState, action: EgrnInfoActions) => {
    switch (action.type) {
        case EgrnActionsEnum.SET_OPEN_FILE:
            return  {...state, openFile: action.payload}
        case EgrnActionsEnum.SET_INITIAL_CN_ARRAY:
            return {...state, egrnData: action.payload.map(item=>{
                return {
                    cn: item.cn,
                    parentId: undefined,
                    areaValue: undefined,
                    address : undefined,
                    areaType : undefined,
                    utilType : undefined
                }
                })}
        default:
            return state;
    }
}

export const egrnInfoActions = {
    SetOpenFileAC : (payload: File | undefined) : SetOpenFile =>({type: EgrnActionsEnum.SET_OPEN_FILE, payload}),
    SetInitialCNArrayAC : (payload: Array<CN>) : SetInitialCNArray => ({type: EgrnActionsEnum.SET_INITIAL_CN_ARRAY, payload})
}