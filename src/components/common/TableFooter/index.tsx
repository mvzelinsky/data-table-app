import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import './styles.css';

const TableFooter = () => {

    return (
        <tfoot className="TableFooter">
            <tr>
                <td 
                    colSpan={8}
                    className="FooterCell"
                >
                    <div className="FooterContent">
                        <Pagination>
                            <>
                                <Pagination.First />
                                <Pagination.Prev />
                            </>
                            <>
                                <Pagination.Next />
                                <Pagination.Last />
                            </>
                        </Pagination>
                    </div>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFooter;