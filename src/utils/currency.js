export const formatCurrency = (n, prefix = "NGN") => {
  var parts = n.toString().split(".");
  return (
    prefix +
    " " +
    (parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (parts[1] ? "." + parts[1] : ""))
  );
};
