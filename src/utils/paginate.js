import _ from "lodash";

const paginate = (items, page, pageSize) => {
  let paginatedItems = _(items)
    .slice((page - 1) * pageSize)
    .take(pageSize)
    .value();
  return paginatedItems;
};

export default paginate;
