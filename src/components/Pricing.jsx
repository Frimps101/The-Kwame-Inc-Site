import React from "react";
import './Pricing.css';
import {  Table } from 'antd';

const dataSource = [
  {
    key: '1',
    size: '12x16',
    price: 'Ghc 90',

  },
  {
    key: '2',
    size: '15x19',
    price: 'Ghc 150',

  },{
    key: '3',
    size: '16x20',
    price: 'Ghc 160',

  },
  {
    key: '4',
    size: '20x24',
    price: 'Ghc 220',

  },{
    key: '5',
    size: '20x30',
    price: 'Ghc 300',

  },
  {
    key: '6',
    size: '24x36',
    price: 'Ghc 400',

  }
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
    <div className="section bg-white">
      <h3 className="text-3xl font-bold text-center my-4">Pricing</h3>
      <p className="text-center mb-6">Affordable prices, limitless possibilities!</p>
      <Table dataSource={dataSource} columns={columns} pagination={false} className="drop-shadow-2xl  pb-[5rem]"/>
    </div>
  );
};

export default Pricing;
