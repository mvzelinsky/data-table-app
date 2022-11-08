import React, { FunctionComponent, useState, useEffect } from "react";

import Table from "../common/Table";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";

import './styles.css';

interface DataType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string, // !TODO fix type to { female / male }
  ip_address: string;
  company_name: string;
  account: string;
  married: boolean;
}

const DataTable: FunctionComponent = () => {
  const [data, setData] = useState();
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
        <DataTableRow />
        <DataTableRow />
        <DataTableRow />
      </Table>
    </div>
  );
};

export default DataTable;
