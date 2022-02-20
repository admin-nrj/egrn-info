import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {EgrnData} from "../../types/egrnInfoReucerTypes";

const Table = () => {

    const areaEgrnData = useTypedSelector(state => state.egrnInfoData.areaEgrnData)

    if (areaEgrnData?.length === 0)
        return (
            <>
                <div>
                    В первом столбце таблицы эксель должны быть кадастровые номера.
                </div>
            </>
        )

    return (
        <>
            {areaEgrnData?.map((i: EgrnData) => <div key={i.cn}>{i.cn}</div>)}
        </>
    );
};

export default Table;