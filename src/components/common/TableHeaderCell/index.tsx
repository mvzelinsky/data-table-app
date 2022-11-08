import React, { FunctionComponent, ReactNode } from "react";
import './styles.css'

interface Props {
    children: ReactNode;
}

const TableHeaderCell: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <th className="HeaderCell">
            {children}
        </th>
    );
};

export default TableHeaderCell;
