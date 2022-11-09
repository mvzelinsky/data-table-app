import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Links, parseLinkHeader } from '@web3-storage/parse-link-header'
import Spinner from 'react-bootstrap/Spinner';

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import TableFooter from "../common/TableFooter";

import { DataType } from './types';
import { TableState } from "../../store/TableReducer";

import './styles.css';

const DataTable: FunctionComponent = () => {
  const {
    page,
    searchQuery,
    sortBy,
    sortOrder
  }: TableState = useSelector(state => state) as TableState;

  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false); 
  const [paginationParams, setPaginationParams] = useState<Links | null>({});

  const fetchData = useCallback((url: string) => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        const linkHeader = res.headers.get('Link');
        const parsed = parseLinkHeader(linkHeader);
        setPaginationParams(parsed);
        return res.json();
      })
      .then((results) => {
        setData(results);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData(`http://localhost:4000/people?q=${searchQuery}&_page=${page}&_sort=${sortBy}&_order=${sortOrder}`);
  }, [fetchData, page, searchQuery, sortBy, sortOrder]);

  return (
    <div className="TableContainer">
      <Table>
        <DataTableHeader />
        {!data.length && !loading && (
          <h1>no data</h1>
        )}
        {data.length && !loading && (
          data.map(d => (
            <DataTableRow
              key={d.id}
              data={d}
            />
          ))
        )}
        <TableFooter paginationParams={paginationParams} />
      </Table>
      {!data.length && loading && (
          <div className="SpinnerContainer">
            <Spinner animation="border" />
          </div>
        )}
    </div>
  );
};

export default DataTable;
