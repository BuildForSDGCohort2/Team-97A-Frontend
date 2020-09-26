import React from "react";
import Card from "../profile/Card";

import "./wallet.css";

const Wallet = () => {
  const handleDeposit = () => {
    console.log("deposit");
  };

  const handleWidthraw = () => {
    console.log("widthraw");
  };

  return (
    <div className="dashboard-body">
      <h4>Wallet</h4>
      <div className="wallet-body">
        <div className="wallet-balance">
          <Card title="Wallet Balance" titleIcon={null} topColor="#FF2D64">
            <span>NGN 7,652.34 </span>
            <button
              className="button deposit-button"
              onClick={() => handleDeposit()}
            >
              Deposit
            </button>
            <button
              className="button withdraw-button"
              onClick={() => handleWidthraw()}
            >
              Widthraw
            </button>
          </Card>
        </div>
        <div className="wallet-history">
          <Card title="Recent Transactions" titleIcon={null} topColor="#67AFD0">
            <table className="table">
              <tr>
                <th>Date</th>
                <th>PackageID</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>21-02-2020</td>
                <td>-</td>
                <td>Credit</td>
                <td className="amount-text">NGN 15,102.98</td>
              </tr>
              <tr>
                <td>21-02-2020</td>
                <td>-</td>
                <td>Credit</td>
                <td className="amount-text">NGN 15,102.98</td>
              </tr>
              <tr>
                <td>21-02-2020</td>
                <td>-</td>
                <td>Credit</td>
                <td className="amount-text">NGN 15,102.98</td>
              </tr>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
