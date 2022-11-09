import React, { FunctionComponent, useMemo } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Links } from '@web3-storage/parse-link-header';
import { useDispatch } from "react-redux";

import {
    toFirstPageAction,
    toLastPageAction,
    toNextPageAction,
    toPrevPageAction
} from '../../../store/TableReducer';

import './styles.css';

interface Props {
    paginationParams: Links | null;
}

const TableFooter:FunctionComponent<Props> = (props) => {
    const { paginationParams } = props;

    const dispatch = useDispatch();

    const isFirstPage = !paginationParams?.prev;
    const isLastPage = !paginationParams?.next;

    const currentPage = useMemo(() => {
        if (!paginationParams?.prev) {
            return 1;
        } else if (!paginationParams?.next) {
            return Number(paginationParams.last._page);
        } else {
            return Number(paginationParams.next._page) - 1;
        }
    }, [paginationParams]);

    const handleNextPage = () => {
        dispatch(toNextPageAction({ page: currentPage }))
    }

    const handlePrevPage = () => {
        dispatch(toPrevPageAction({ page: currentPage }))
    }

    const handleFirstPage = () => {
        dispatch(toFirstPageAction({ page: 1 }))
    }

    const handleLastPage = () => {
        dispatch(toLastPageAction({ page: Number(paginationParams?.last._page) }))
    }

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
                                    onClick={handleFirstPage}
                                />
                                <Pagination.Prev
                                    disabled={isFirstPage} 
                                    onClick={handlePrevPage}
                                />

                                <Pagination.Item active>
                                    {currentPage}
                                </Pagination.Item>

                                <Pagination.Next
                                    disabled={isLastPage} 
                                    onClick={handleNextPage}
                                />
                                <Pagination.Last
                                    disabled={isLastPage}
                                    onClick={handleLastPage}
                                />
                        </Pagination>
                    </div>
                </td>
            </tr>
        </tfoot>
    );
};

export default TableFooter;