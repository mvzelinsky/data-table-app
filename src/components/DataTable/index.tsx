import React, { FunctionComponent, useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import TableFooter from "../common/TableFooter";

import { DataType } from './types';

import './styles.css';

const DataTable: FunctionComponent = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);  

  const fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:4000/people?_page=5`)
      .then((res) => {
        console.log(res, res.headers.get('Link'));
        return res.json();
      })
      .then((results) => {
        setData(results);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


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
        <TableFooter />
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
