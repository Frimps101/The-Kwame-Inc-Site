import React from "react";
import './Pricing.css';
import {  Table } from 'antd';

const dataSource = [
  {
    key: '1',
    size: 'Mike',
    price: 32,

  },
  {
    key: '2',
    size: 'John',
    price: 42,

  },
];

const columns = [
  {
    title: 'Size',
    dataIndex: 'size'
  },
  {
    title: 'Price',
    dataIndex: 'price'
  }
];

const Pricing = () => {
  return (
    <div className="section mb-10">
      <h3>Pricing</h3>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
  );
};

export default Pricing;
