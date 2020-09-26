import React, { useState } from "react";

import Sidebar from "../mainDashboard/sidebar/sidebar";
import DashboardTop from "../mainDashboard/dashboardTop/dashboardTop";
import Card from "../profile/Card";
import { useRavePayment } from "react-ravepayment";

import "./wallet.css";
import Modal from "../Modal";

const Wallet = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [depositAmount, setDepositAmount] = useState();

  const config = {
    txref: "rave-123456",
    customer_email: "user@carigo.ng",
    customer_phone: "07033389645",
    amount: depositAmount,
    PBFPubKey: "FLWPUBK-9d4c93ff4026de069066c00f1a36e899-X", // putting this here for now
    production: false,
  };

  const { initializePayment } = useRavePayment(config);

  const handleWidthraw = () => {
    console.log("widthraw");
  };

  return (
    <React.Fragment>
      <div className="dashboard-body">
        <h4>Wallet</h4>
        <div className="wallet-body">
          <div className="wallet-balance">
            <Card title="Wallet Balance" titleIcon={null} topColor="#FF2D64">
              <span>NGN 7,652.34 </span>
              <button
                className="button deposit-button"
                onClick={() => setModalVisible(true)}
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
            <Card
              title="Recent Transactions"
              titleIcon={null}
              topColor="#67AFD0"
            >
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

      <Modal
        title="Provide amount"
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <div className="modal">
          <input
            type="number"
            placeholder="Enter amount"
            className="wallet-input"
            onChange={({ target: { value } }) => setDepositAmount(value)}
          />

          <button
            className="button proceed-button"
            onClick={() => initializePayment()}
          >
            Proceed
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Wallet;
