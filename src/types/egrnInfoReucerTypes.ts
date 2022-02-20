export enum EgrnActionsEnum {
    SET_OPEN_FILE = 'SET_OPEN_FILE',
    SET_INITIAL_CN_ARRAY = 'SET_INITIAL_CN_ARRAY'
}

export interface EgrnInfoState {
    openFile: File | null,
    areaEgrnData : Array<EgrnData> | null
}


export interface SetOpenFile {
    type: EgrnActionsEnum.SET_OPEN_FILE
    payload: File | null
}

export interface SetInitialCNArray {
    type: EgrnActionsEnum.SET_INITIAL_CN_ARRAY
    payload: Array<EgrnData>
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

export type EgrnInfoActions = SetOpenFile | SetInitialCNArray
