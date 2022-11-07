import React, { FunctionComponent, useState } from "react";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
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
  const [data, setData] = useState([
    {
      "id": 1,
      "first_name": "Kellsie",
      "last_name": "Woolcocks",
      "email": "kwoolcocks0@ucsd.edu",
      "gender": "Female",
      "ip_address": "89.85.218.147",
      "company_name": "Twimm",
      "account": "$210.99",
      "married": false
    },
    {
      "id": 2,
      "first_name": "Janela",
      "last_name": "Dungate",
      "email": "jdungate1@nymag.com",
      "gender": "Female",
      "ip_address": "40.180.159.38",
      "company_name": "Zoomzone",
      "account": "$375.70",
      "married": false
    },
    {
      "id": 3,
      "first_name": "Sherill",
      "last_name": "Brilon",
      "email": "sbrilon2@tamu.edu",
      "gender": "Female",
      "ip_address": "6.164.250.230",
      "company_name": "Dablist",
      "account": "$189.64",
      "married": false
    },
    {
      "id": 4,
      "first_name": "Brandi",
      "last_name": "Pocklington",
      "email": "bpocklington3@chronoengine.com",
      "gender": "Female",
      "ip_address": "191.32.187.201",
      "company_name": "Yakidoo",
      "account": "$401.76",
      "married": true
    },
    {
      "id": 5,
      "first_name": "Konrad",
      "last_name": "Pither",
      "email": "kpither4@springer.com",
      "gender": "Male",
      "ip_address": "189.5.13.29",
      "company_name": "Gigazoom",
      "account": "$119.63",
      "married": true
    },
  ]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'First name',
      dataIndex: 'first_name',
      sorter: true,
    },
    {
      title: 'Last name',
      dataIndex: 'last_name',
      sorter: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: true,
    },
    {
      title: 'IP address',
      dataIndex: 'ip_address',
      sorter: true,
    },
    {
      title: 'Company name',
      dataIndex: 'company_name',
      sorter: true,
    },
    {
      title: 'Account',
      dataIndex: 'account',
      sorter: true,
    },
    {
      title: 'Married',
      dataIndex: 'married',
      sorter: true,
    }
  ];

  return (
    <div className="TableContainer">
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default DataTable;
