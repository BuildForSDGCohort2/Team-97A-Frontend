const environment = process.env.NODE_ENV;

const base = {
  RAVE_SECRET_KEY: process.env.REACT_APP_RAVE_SEC_API_KEY,
  RAVE_PUBLIC_KEY: process.env.REACT_APP_RAVE_PUB_API_KEY,
};

const settings = {
  dev: {
    BASE_URL: "http://localhost:8000/api/v1",
    RAVE_BASE_URL: "https://ravesandboxapi.flutterwave.com",
    ...base,
  },
  prod: {
    BASE_URL: "https://backend-carigo.herokuapp.com/api/v1",
    RAVE_BASE_URL: "https://api.ravepay.co",
    ...base,
  },
};

const getCurrentSettings = () => {
  if (environment === "development") return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
