import React, { FunctionComponent, useState, useEffect } from "react";

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";

import { DataType } from './types';

import './styles.css';

const DataTable: FunctionComponent = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);  

  const fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:4000/people?_page=2`)
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
        {data ? (
          data.map(d => (
            <DataTableRow
              key={d.id}
              data={d}
            />
          ))
        ) : (
          <h1>no data</h1>
        )}
      </Table>
    </div>
  );
};

export default DataTable;
