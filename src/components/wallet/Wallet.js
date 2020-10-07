import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFlutterwave } from "react-flutterwave";

import "./wallet.css";
import Modal from "../Modal";
import Card from "../profile/Card";
import APIClient from "../../services/dataService";
import walletApi from "../../api/wallet";
import Loader from "../Loader";
import settings from "../../config/settings";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/currency";

const Wallet = () => {
  const [modalVisible, setModalVisible] = useState({});
  const [depositAmount, setDepositAmount] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [transactionReference, setTransactionReference] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const someModalVisible = Object.values(modalVisible).some((e) => e === true); // true if any modal is open

  const config = {
    tx_ref: transactionReference,
    currency: "NGN",
    customer: {
      email: user.email,
      phonenumber: user.phone_number,
      name: `${user.first_name} ${user.last_name}`,
    },

    amount: depositAmount,
    public_key: settings.RAVE_PUBLIC_KEY,
    production: !process.env.NODE_ENV === "development",
  };

  const handleDeposit = useFlutterwave(config);

  const handleWidthraw = async () => {
    setLoading(true);
    const message = await walletApi.requestWithdrawal(
      withdrawAmount,
      user.wallet.id
    );
    setLoading(false);
    // update user waalet info
    getWallet();
    toast(message);
  };

  useEffect(() => {
    getWallet();
  }, []);

  const getWallet = async () => {
    const user = await APIClient.getCurrentUser();
    setUser(user);
    setTransactionReference(uuidv4());
  };

  const creditWallet = async () => {
    const message = await walletApi.creditAccount(
      depositAmount,
      user.wallet.id
    );
    toast(message);

    // update user wallet
    getWallet();
  };

  const verifyTransaction = async (obj) => {
    setModalVisible(false);
    setLoading(true);

    if (obj) {
      const {
        amount,
        status,
        tx_ref,
        customer: { email },
      } = obj;
      if (
        amount >= depositAmount &&
        status === "successful" &&
        tx_ref === transactionReference &&
        email === user.email
      ) {
        const res = await walletApi.verifyTransaction({
          txref: tx_ref,
          SECKEY: settings.RAVE_SECRET_KEY,
        });

        const {
          data: {
            data: { status },
          },
        } = res;

        if (status === "successful") {
          creditWallet();
        } else {
          alert(
            "A problem was encountered while verifying your deposit, please contact carigo admin."
          );
        }
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Loader text="Processing transaction" visible={loading} />
      <div className="dashboard-body">
        <h4>Wallet</h4>
        <div className="wallet-body">
          <div className="wallet-balance">
            <Card title="Wallet Balance" titleIcon={null} topColor="#FF2D64">
              <span>
                {user.wallet &&
                  formatCurrency(user.wallet.current_balance.toFixed(2))}
              </span>
              <button
                className="button deposit-button"
                onClick={() => setModalVisible({ deposit: true })}
              >
                Deposit
              </button>
              <button
                className="button withdraw-button"
                onClick={() => setModalVisible({ withraw: true })}
              >
                Widthraw
              </button>
            </Card>
          </div>
          <div className="wallet-history">
            <Card
              title="Transaction History"
              titleIcon={null}
              topColor="#67AFD0"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>PackageID</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {user.wallet &&
                    user.wallet.transactions.map((item) => (
                      <tr>
                        {/* Date and time handling is ineffiecient here, will update later */}
                        <td
                          title={`at ${new Date(item.created_at)
                            .toLocaleString()
                            .slice(10, 22)}`}
                        >
                          {new Date(item.created_at).toDateString()}
                        </td>
                        <td>-</td>
                        <td>{item.is_credit ? "Deposit" : "Withdrawal"}</td>
                        <td className="amount-text">{item.amount}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>

      <Modal
        title={
          modalVisible.deposit
            ? "Enter Deposit amount"
            : "Enter withdrawal amount"
        }
        visible={someModalVisible}
        setVisible={setModalVisible}
      >
        {modalVisible.deposit ? (
          <div className="modal">
            <input
              type="number"
              placeholder="Enter amount"
              className="wallet-input"
              onChange={({ target: { value } }) => setDepositAmount(value)}
            />

            <button
              className="button proceed-button"
              onClick={() => {
                depositAmount &&
                  !isNaN(depositAmount) &&
                  handleDeposit({
                    callback: (response) => verifyTransaction(response),
                    onClose: () => {},
                  });
              }}
            >
              Proceed
            </button>
          </div>
        ) : (
          <div className="modal">
            <input
              type="number"
              placeholder="Enter amount"
              className="wallet-input"
              onChange={({ target: { value } }) => setWithdrawAmount(value)}
            />

            <button className="button proceed-button" onClick={handleWidthraw}>
              Proceed
            </button>
          </div>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default Wallet;
