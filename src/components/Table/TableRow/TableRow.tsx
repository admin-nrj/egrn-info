import React from 'react';
import {EgrnData} from "../../../types/egrnInfoReucerTypes";

class PropTypes {
    areaData?: EgrnData
}

function TableRow({areaData}: PropTypes) {

    return (
        <tr>
            <td style={{width:100}}>{areaData?.cn}</td>
            <td style={{width:100}}>{areaData?.parentId}</td>
            <td style={{width:70}}>{areaData?.areaValue}</td>
            <td className={'overflow'}>{areaData?.address}</td>
            <td className={'overflow'}>{areaData?.areaType}</td>
            <td className={'overflow'}>{areaData?.utilType}</td>
        </tr>
    );
}

export default TableRow;