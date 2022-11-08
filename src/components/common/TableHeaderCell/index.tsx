import React, { FunctionComponent, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TableHeaderCell: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <td className="HeaderCell">
            {children}
        </td>
    );
};

export default TableHeaderCell;
