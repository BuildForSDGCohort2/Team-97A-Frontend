import React from "react";
import { Link } from "react-router-dom";
import plusImg from "../../../images/dashboard/plus.png";
import "./tableTop.css";

const TableTop = ({ onSearch, queries }) => {
  return (
    <React.Fragment>
      <h4>Latest packages for delivery</h4>
      <div className="table-top">
        <div className="filter-input">
          <label htmlFor="origin-filter-input">Origin</label>
          <input
            onChange={onSearch}
            id="origin-filter-input"
            type="text"
            placeholder="Lagos"
            value={queries.origin}
            name="origin"
          />
        </div>
        <div className="filter-input">
          <label htmlFor="destination-filter-input">Destination</label>
          <input
            onChange={onSearch}
            id="destination-filter-input"
            type="text"
            placeholder="Abuja"
            value={queries.destination}
            name="destination"
          />
        </div>
        <div className="add-package">
          <Link to="/packages/new/">
            <img src={plusImg} alt="plus" className="plus-img" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableTop;
