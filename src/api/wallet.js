import axios from "axios";
import settings from "../config/settings";
import { headers } from "../services/dataService";
import { formatCurrency } from "../utils/currency";

const config = {
  headers,
};

const verifyTransaction = async (transaction) => {
  const response = await axios.post(
    `${settings.RAVE_BASE_URL}/flwv3-pug/getpaidx/api/v2/verify/`,
    transaction,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return response;
};

const creditAccount = async (amount, walletId) => {
  const url = `${settings.BASE_URL}/wallets/${walletId}/deposit/${amount}/`;
  try {
    await axios.post(url, {}, config);
    return `successfully deposited ${formatCurrency(amount)} into your account`;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    return message;
  }
};

const requestWithdrawal = async (amount, walletId) => {
  const url = `${settings.BASE_URL}/wallets/${walletId}/withdraw/${amount}/`;
  try {
    await axios.post(url, {}, config);
    return "Your withdrawal request is received and your account will be funded soon, thank you.";
  } catch ({
    response: {
      data: { message },
    },
  }) {
    return message;
  }
};

export default {
  creditAccount,
  verifyTransaction,
  requestWithdrawal,
};
