import React, { FunctionComponent, ReactNode } from "react";
import './styles.css';

interface Props {
    children: ReactNode;
}

const TableRowCell: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <td className="TableRowCell">
            {children}
        </td>
    );
};

export default TableRowCell;
