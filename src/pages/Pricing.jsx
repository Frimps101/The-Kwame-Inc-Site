import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import {  Table } from 'antd';

const Pricing = () => {
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
  return (
    <>
      <Nav />
      <PageHero
        title="Pricing"
        content="By accessing or using our website and services, you agree to be bound by the following Terms of Service. Please read them carefully."
      />

      <div className="section bg-white">
      <h3 className="text-3xl font-bold text-center my-4">Pricing</h3>
      <p className="text-center mb-6">Affordable prices, limitless possibilities!</p>
      <Table dataSource={dataSource} columns={columns} pagination={false} className="drop-shadow-2xl  pb-[5rem]"/>
    </div>

      <Footer />
    </>
  )
}

export default Pricing