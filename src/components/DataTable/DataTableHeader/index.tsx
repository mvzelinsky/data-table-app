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
            <TableHeaderCell>
                gender
            </TableHeaderCell>
            <TableHeaderCell>
                IP address
            </TableHeaderCell>
            <TableHeaderCell>
                Company name
            </TableHeaderCell>
            <TableHeaderCell>
                Account
            </TableHeaderCell>
            <TableHeaderCell>
                Married
            </TableHeaderCell>
        </TableHeader>
    );
};

export default DataTableHeader;
