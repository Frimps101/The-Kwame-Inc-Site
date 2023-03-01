import React from "react";
import './Pricing.css';


const Pricing = () => {
  return (
    <section className="p-container">
      <h2 className="p-title">Pricing Details</h2>
      <div className="p-card">
        <div className="p-left">
          <h3 className="p-left--title">
            Affordable frames for <span>priceless memories.</span>
          </h3>
          <p className="p-left--text">
            We offer a wide range of high-quality frames in various sizes and styles to suit your needs.
          </p>
          <div className="p-left--img">
            <img src="/images/pricing-img.png" alt="" />
          </div>
        </div>
        <div className="p-right">
          <h3 className="p-right--title">Affordable Prices</h3>
          <p className="p-right--subtitle">
            Discover affordable prices that frame your memories perfectly!
          </p>
          <div className="p-right--prices">
            <table>
                <thead>
                    <tr>Frame Sizes & Prices</tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sizes</th>
                        <th>Prices</th>
                    </tr>
                    <tr>
                        <td>12x16</td>
                        <td>130gh</td>
                    </tr>
                    <tr>
                        <td>15x19</td>
                        <td>180gh</td>
                    </tr>
                    <tr>
                        <td>16x20</td>
                        <td>190gh</td>
                    </tr>
                    <tr>
                        <td>20x24</td>
                        <td>270gh</td>
                    </tr>
                    <tr>
                        <td>20x30</td>
                        <td>350gh</td>
                    </tr>
                    <tr>
                        <td>24x36</td>
                        <td>420gh</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
