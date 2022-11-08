import React, { FunctionComponent, useState, useEffect, useCallback } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Links, parseLinkHeader } from '@web3-storage/parse-link-header'

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import TableFooter from "../common/TableFooter";

import { DataType } from './types';

import './styles.css';

const DataTable: FunctionComponent = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false); 
  const [paginationParams, setPaginationParams] = useState<Links | null>({});

  const fetchData = useCallback((url: Links | string) => {
    setLoading(true);
    fetch(url as RequestInfo | URL)
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
    fetchData('http://localhost:4000/people?_page=1');
  }, []);

  const handlePrevPage = useCallback(() => {
    if (paginationParams?.prev.url) {
      fetchData(paginationParams.prev.url);
    };
  }, [fetchData, paginationParams]);

  const handleNextPage = useCallback(() => {
    if (paginationParams?.next.url) {
      fetchData(paginationParams.next.url);
    };
  }, [fetchData, paginationParams]);

  const handleLastPage = useCallback(() => {
    if (paginationParams?.last.url) {
      fetchData(paginationParams.last.url);
    };
  }, [fetchData, paginationParams]);

  const handleFirstPage = useCallback(() => {
    if (paginationParams?.first.url) {
      fetchData(paginationParams.first.url);
    };
  }, [fetchData, paginationParams]);


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
        <TableFooter
          paginationParams={paginationParams}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onLastPage={handleLastPage}
          onFirstPage={handleFirstPage}
        />
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
