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
            <td style={{width:200}}>{areaData?.address}</td>
            <td>{areaData?.areaType}</td>
            <td>{areaData?.utilType}</td>
        </tr>
    );
}

export default TableRow;