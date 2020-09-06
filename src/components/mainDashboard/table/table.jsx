import React from "react";
import { Link } from "react-router-dom";
import originIcon from "../../../images/dashboard/origin.png";
import nextIcon from "../../../images/dashboard/next.png";
import prevIcon from "../../../images/dashboard/prev.png";
import destinationIcon from "../../../images/dashboard/destination.png";
import "./table.css";

const PackageTable = ({
  onPackageClick,
  data,
  onPaginate,
  currentPage,
  totalPages,
  dataSize,
}) => {
  return (
    <React.Fragment>
      <table>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Priority</th>
          <th>Cost</th>
        </tr>
        {data.map((item) => {
          return (
            <tr onClick={() => onPackageClick(item.id)}>
              {item.title}
              <td>{item.name}</td>
              <td>{item.weight}</td>
              <td className="origin">
                <img src={originIcon} alt="origin icon" /> {item.origin}
              </td>
              <td className="destination">
                <img src={destinationIcon} alt="destination icon" />{" "}
                {item.destination}
              </td>
              <td className="priority-td">
                <div className="priority">{item.priority}</div>
              </td>
              <td>{item.cost}</td>
            </tr>
          );
        })}
      </table>
      <div className="pagination">
        <p>
          showing {data.length} of {dataSize} entries
        </p>
        <img
          style={currentPage <= 1 ? { display: "none" } : {}}
          onClick={() => onPaginate("prev")}
          src={prevIcon}
          alt="previous icon"
        />

        <img
          style={currentPage >= totalPages ? { display: "none" } : {}}
          onClick={() => onPaginate("next")}
          src={nextIcon}
          alt="next icon"
        />
      </div>
    </React.Fragment>
  );
};

export default PackageTable;
