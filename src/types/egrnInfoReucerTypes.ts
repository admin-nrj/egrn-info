export enum EgrnActionsEnum {
    SET_OPEN_FILE = 'SET_OPEN_FILE',
    SET_INITIAL_CN_ARRAY = 'SET_INITIAL_CN_ARRAY',
    SET_AREA_DATA_FROM_EGRN ='SET_AREA_DATA_FROM_EGRN'
}

export interface EgrnInfoState {
    openFile: File | null,
    areaEgrnData : Array<EgrnData> | undefined
}


export interface SetOpenFile {
    type: EgrnActionsEnum.SET_OPEN_FILE
    payload: File | null
}

export interface SetInitialCNArray {
    type: EgrnActionsEnum.SET_INITIAL_CN_ARRAY
    payload: Array<EgrnData>
}

export interface SetAreaDataFromEgrn {
    type: EgrnActionsEnum.SET_AREA_DATA_FROM_EGRN
    payload: EgrnData
}

export interface CN {
    cn:string
}

export interface EgrnData {
    cn?: string,
    parentId?: string,
    areaValue?: number,
    address? : string,
    areaType? : string,
    utilType? : string
}

export type EgrnInfoActions = SetOpenFile | SetInitialCNArray | SetAreaDataFromEgrn
