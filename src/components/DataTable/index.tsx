import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Links, parseLinkHeader } from '@web3-storage/parse-link-header'

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import DataTablePlug from "./DataTablePlug";
import TableFooter from "../common/TableFooter";

import { setDataAction, setLoadingAction } from "../../store/TableReducer";
import { TableState } from "../../store/types";

import './styles.css';

const DataTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    data,
    loading,
    page,
    searchQuery,
    sortBy,
    sortOrder
  }: TableState = useSelector(state => state) as TableState;

  const [paginationParams, setPaginationParams] = useState<Links | null>({});

  const fetchData = useCallback((url: string) => {
    dispatch(setLoadingAction({ loading: true }))
    fetch(url)
      .then((res) => {
        const linkHeader = res.headers.get('Link');
        const parsed = parseLinkHeader(linkHeader);
        setPaginationParams(parsed);
        return res.json();
      })
      .then((results) => {
        dispatch(setDataAction({ data: results }))
        dispatch(setLoadingAction({ loading: false }))
      });
  }, [dispatch]);

  useEffect(() => {
    fetchData(`http://localhost:4000/people?q=${searchQuery}&_page=${page}&_sort=${sortBy}&_order=${sortOrder}`);
  }, [fetchData, page, searchQuery, sortBy, sortOrder]);

  return (
    <div className="TableContainer">
      <Table>
        <DataTableHeader />
        {Boolean(data.length) && !loading && (
          data.map(d => (
            <DataTableRow
              key={d.id}
              data={d}
            />
          ))
        )}
        {(!data.length || loading) && (
          <DataTablePlug
            isDataEmpty={!data.length}
            loading={loading}
          />
        )}
        <TableFooter paginationParams={paginationParams} />
      </Table>
    </div>
  );
};

export default DataTable;
