import React, { FunctionComponent } from 'react';

import TableRow from '../../common/TableRow';
import TableRowCell from '../../common/TableRowCell';

import { DataType } from '../../DataTable/types';

interface Props {
    data: DataType;
}

const DataTableRow: FunctionComponent<Props> = (props) => {
    const { data } = props;

    return (
        <TableRow>
            <TableRowCell>
                {data.first_name}
            </TableRowCell>
            <TableRowCell>
                {data.last_name}
            </TableRowCell>
            <TableRowCell>
                {data.email}
            </TableRowCell>
            <TableRowCell>
                {data.gender}
            </TableRowCell>
            <TableRowCell>
                {data.ip_address}
            </TableRowCell>
            <TableRowCell>
                {data.company_name}
            </TableRowCell>
            <TableRowCell>
                {data.account}
            </TableRowCell>
            <TableRowCell>
                {data.married ? 'Yes' : 'No'}
            </TableRowCell>
        </TableRow>
    );
};

export default DataTableRow;
