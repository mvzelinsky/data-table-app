import React from 'react';

import TableHeader from '../../common/TableHeader';
import TableHeaderCell from '../../common/TableHeaderCell';

const DataTableHeader = () => {

    return (
        <TableHeader>
            <TableHeaderCell>
                First name
            </TableHeaderCell>
            <TableHeaderCell>
                Last name
            </TableHeaderCell>
            <TableHeaderCell>
                email
            </TableHeaderCell>
        </TableHeader>
    );
};

export default DataTableHeader;
