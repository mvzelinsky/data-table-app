import React, { FunctionComponent, ReactNode } from "react";
import './styles.css';

interface Props {
    children: ReactNode;
    colspan?: number;
}

const TableRowCell: FunctionComponent<Props> = (props) => {
    const {
        children,
        colspan,
    } = props;

    return (
        <td
            className="TableRowCell"
            colSpan={colspan}
        >
            {children}
        </td>
    );
};

export default TableRowCell;
