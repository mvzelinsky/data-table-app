import React, { FunctionComponent, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TableHeader: FunctionComponent<Props> = (props) => {
    const { children } = props;

    return (
        <thead className="TableHeader">
            <tr>
                {children}
            </tr>
        </thead>
    );
};

export default TableHeader;
