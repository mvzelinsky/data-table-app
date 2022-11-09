import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import TableHeader from '../../common/TableHeader';
import TableHeaderCell from '../../common/TableHeaderCell';
import Sort from '../../common/Sort';

import { sortAction, SortOrder, TableState } from '../../../store/TableReducer';

const DataTableHeader = () => {
    const dispatch = useDispatch();
    const {
        sortOrder,
    }: TableState = useSelector(state => state) as TableState;

    const getNewSortOrder = () => {
        if (sortOrder === SortOrder.ASC) {
            return SortOrder.DESC;
        } else if (sortOrder === SortOrder.DESC) {
            return SortOrder.OFF
        } else {
            return SortOrder.ASC
        }
    }
 
    const handleSort = (field: string) => {
        const newSortOrder = getNewSortOrder();
        const sortField = newSortOrder === SortOrder.OFF ? 'id' : field;
        dispatch(sortAction({
            sortBy: sortField,
            sortOrder: newSortOrder,
        }))
    }

    return (
        <TableHeader>
            <TableHeaderCell>
                <Sort 
                    columnName="First name"
                    columnValue="first_name"
                    onSort={() => handleSort('first_name')}
                />
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
