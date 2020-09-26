import React, { Component } from "react";
import paginate from "./../../../utils/paginate";
import originIcon from "../../../images/dashboard/origin.png";
import nextIcon from "../../../images/dashboard/next.png";
import prevIcon from "../../../images/dashboard/prev.png";
import destinationIcon from "../../../images/dashboard/destination.png";
import "./table.css";

class PackageTable extends Component {
  state = { currentPage: 1, totalPages: 0 };

  componentDidMount() {
    const totalPages = Math.ceil(
      this.props.packages.length / this.props.numPerPage
    );
    this.setState({ totalPages });
  }

  // handles onclick of the pagination prompts
  handlePaginate = (dir) => {
    let currentPage = this.state.currentPage;
    currentPage = dir === "next" ? currentPage + 1 : currentPage - 1;
    this.setState({ currentPage });
  };

  // paginates data
  getPanginatedData = () => {
    const paginatedData = paginate(
      this.props.packages,
      this.state.currentPage,
      this.props.numPerPage
    );
    return paginatedData;
  };

  render() {
    const { onPackageClick, packages } = this.props;
    const { currentPage, totalPages } = this.state;
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
          {this.getPanginatedData().map((item) => {
            return (
              <tr key={item.id} onClick={() => onPackageClick(item.id)}>
                {item.title}
                <td>{item.name}</td>
                <td>{item.weight} KG</td>
                <td className="origin">
                  <img src={originIcon} alt="origin icon" /> {item.origin}
                </td>
                <td className="destination">
                  <img src={destinationIcon} alt="destination icon" />{" "}
                  {item.destination}
                </td>
                <td className="priority-td">
                  <p className={item.priority + " priority "}>
                    {item.priority}
                  </p>
                </td>
                <td>{item.price} NGN</td>
              </tr>
            );
          })}
        </table>
        <div className="pagination">
          {packages.length === 0 ? (
            <p>No packages to show yet</p>
          ) : (
            <p>
              showing {this.getPanginatedData().length} of {packages.length}{" "}
              entries
            </p>
          )}
          <img
            style={currentPage <= 1 ? { display: "none" } : {}}
            onClick={() => this.handlePaginate("prev")}
            src={prevIcon}
            alt="previous icon"
          />

          <img
            style={currentPage >= totalPages ? { display: "none" } : {}}
            onClick={() => this.handlePaginate("next")}
            src={nextIcon}
            alt="next icon"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PackageTable;
