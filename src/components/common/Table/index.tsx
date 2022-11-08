import React, { FunctionComponent, ReactNode } from "react";
import './styles.css';

interface Props {
    children: ReactNode;
}

const Table: FunctionComponent<Props> = (props) => {
    const {
        children,
    } = props;

    return (
        <table className="Table">
            {children}
        </table>
    );
};

export default Table;
