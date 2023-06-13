import React from "react";
import './Pricing.css';

import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Size", "Prices"];
 
const TABLE_ROWS = [
  {
    sizes: "12x16",
    prices: "130gh"
  },
  {
    sizes: "15x19",
    prices: "180gh"
  },
  {
    sizes: "16x20",
    prices: "190gh"
  },
  {
    sizes: "20x24",
    prices: "270gh"
  },
  {
    sizes: "20x30",
    prices: "350gh"
  },
  {
    sizes: "24x36",
    prices: "420gh"
  },
];

const Pricing = () => {
  return (
    <Card className="section overflow-scroll h-full w-full drop-shadow-2xl">
      <h3 className="text-center">Pricing</h3>
      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ sizes, prices }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={sizes}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {sizes}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {prices}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>

  );
};

export default Pricing;
