import React, { FunctionComponent, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TableRow: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <tr className="TableRow">
            {children}
        </tr>
    );
};

export default TableRow;
