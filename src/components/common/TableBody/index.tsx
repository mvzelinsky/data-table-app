import React, { FunctionComponent, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TableBody: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <tbody>
            {children}
        </tbody>
    );
};

export default TableBody;
