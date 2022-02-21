import {
    CN,
    EgrnActionsEnum,
    EgrnData,
    EgrnInfoActions,
    EgrnInfoState,
    SetAreaDataFromEgrn,
    SetInitialCNArray,
    SetOpenFile
} from "../../types/egrnInfoReucerTypes";

const defState = {
    openFile: null,
    areaEgrnData: undefined
} as  EgrnInfoState


export const egrnInfoReducer = (state = defState, action: EgrnInfoActions) : EgrnInfoState => {
    switch (action.type) {
        case EgrnActionsEnum.SET_OPEN_FILE:
            return {...state, openFile: action.payload}
        case EgrnActionsEnum.SET_INITIAL_CN_ARRAY:
            return {...state, areaEgrnData: action.payload}
        case EgrnActionsEnum.SET_AREA_DATA_FROM_EGRN:
            return {...state, areaEgrnData: state.areaEgrnData?.map(i =>
                    action.payload.cn===i.cn? action.payload : i)}
        default:
            return state;
    }
}

export const egrnInfoActions = {
    SetOpenFileAC: (payload: File | null) : SetOpenFile => ({type: EgrnActionsEnum.SET_OPEN_FILE, payload}),
    SetInitialCNArrayAC: (payload: Array<CN>) :SetInitialCNArray => ({
        type: EgrnActionsEnum.SET_INITIAL_CN_ARRAY,
        payload: payload.map(item => (
            {
                cn: item.cn,
                parentId: undefined,
                areaValue: undefined,
                address: undefined,
                areaType: undefined,
                utilType: undefined
            })
        )
    }),
    SetDataFromEGRN(payload: EgrnData):SetAreaDataFromEgrn {
        return {type : EgrnActionsEnum.SET_AREA_DATA_FROM_EGRN, payload};
    }
}