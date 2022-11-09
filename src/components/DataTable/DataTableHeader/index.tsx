import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import TableHeader from '../../common/TableHeader';
import TableHeaderCell from '../../common/TableHeaderCell';
import Sort from '../../common/Sort';

import { Columns } from '../../../consts/columns';
import { sortAction, SortOrder, TableState } from '../../../store/TableReducer';

const DataTableHeader = () => {
    const dispatch = useDispatch();
    const {
        sortBy,
        sortOrder,
    }: TableState = useSelector(state => state) as TableState;

    const getNewSortOrder = (newSortingField: string) => {
        if (sortBy !== newSortingField) {
            return SortOrder.ASC;
        }

        if (sortOrder === SortOrder.ASC) {
            return SortOrder.DESC;
        } else if (sortOrder === SortOrder.DESC) {
            return SortOrder.OFF
        } else {
            return SortOrder.ASC
        }
    }
 
    const handleSort = (field: string) => {
        const newSortOrder = getNewSortOrder(field);
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
                    columnValue={Columns.FIRST_NAME}
                    onSort={() => handleSort(Columns.FIRST_NAME)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Last name"
                    columnValue={Columns.LAST_NAME}
                    onSort={() => handleSort(Columns.LAST_NAME)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Email"
                    columnValue={Columns.EMAIL}
                    onSort={() => handleSort(Columns.EMAIL)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Gender"
                    columnValue={Columns.GENDER}
                    onSort={() => handleSort(Columns.GENDER)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="IP Address"
                    columnValue={Columns.IP_ADDRESS}
                    onSort={() => handleSort(Columns.IP_ADDRESS)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Company name"
                    columnValue={Columns.COMPANY_NAME}
                    onSort={() => handleSort(Columns.COMPANY_NAME)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Account"
                    columnValue={Columns.ACCOUNT}
                    onSort={() => handleSort(Columns.ACCOUNT)}
                />
            </TableHeaderCell>
            <TableHeaderCell>
                <Sort 
                    columnName="Married"
                    columnValue={Columns.MARRIED}
                    onSort={() => handleSort(Columns.MARRIED)}
                />
            </TableHeaderCell>
        </TableHeader>
    );
};

export default DataTableHeader;
