import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {EgrnData} from "../../types/egrnInfoReucerTypes";
import TableRow from "./TableRow/TableRow";
import './table.css'

const Table = () => {

    const areaEgrnData = useTypedSelector(state => state.egrnInfoData.areaEgrnData)

    if (!areaEgrnData) {
        return (
            <>
                <div>
                    В первом столбце таблицы эксель должны быть кадастровые номера.
                </div>
            </>
        )
    }

    return (
        <table>
            <thead>
            <tr>
                <th>КН пересечения</th>
                <th>КН ЕЗП</th>
                <th>Площадь</th>
                <th>Адрес</th>
                <th>Категория земель</th>
                <th>Назначение</th>
            </tr>
            </thead>
            <tbody>
            {areaEgrnData?.map((egrnData: EgrnData) => <TableRow key={egrnData.cn} areaData={egrnData}/>)}
            </tbody>
        </table>
    );
};

export default Table;