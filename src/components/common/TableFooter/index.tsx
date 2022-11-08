import React, { FunctionComponent, MouseEventHandler, useMemo } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Links } from '@web3-storage/parse-link-header';

import './styles.css';

interface Props {
    paginationParams: Links | null;
    onPrevPage: MouseEventHandler<HTMLElement>;
    onNextPage: MouseEventHandler<HTMLElement>;
    onLastPage: MouseEventHandler<HTMLElement>;
    onFirstPage: MouseEventHandler<HTMLElement>;
}

const TableFooter:FunctionComponent<Props> = (props) => {
    const {
        paginationParams,
        onPrevPage,
        onNextPage,
        onLastPage,
        onFirstPage,
    } = props;

    const isFirstPage = !paginationParams?.prev;
    const isLastPage = !paginationParams?.next;

    const currentPage = useMemo(() => {
        if (!paginationParams?.prev) {
            return 1;
        } else if (!paginationParams?.next) {
            return paginationParams.last._page;
        } else {
            return Number(paginationParams.next._page) - 1;
        }
    }, [paginationParams]);

    return (
        <tfoot className="TableFooter">
            <tr>
                <td 
                    colSpan={8}
                    className="FooterCell"
                >
                    <div className="FooterContent">
                        <Pagination>
                                <Pagination.First
                                    disabled={isFirstPage} 
                                    onClick={onFirstPage}
                                />
                                <Pagination.Prev
                                    disabled={isFirstPage} 
                                    onClick={onPrevPage}
                                />

                                <Pagination.Item active>
                                    {currentPage}
                                </Pagination.Item>

                                <Pagination.Next
                                    disabled={isLastPage} 
                                    onClick={onNextPage}
                                />
                                <Pagination.Last
                                    disabled={isLastPage}
                                    onClick={onLastPage}
                                />
                        </Pagination>
                    </div>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFooter;