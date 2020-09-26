import React from "react";
import EditBank, { Modal, EditVerification } from "./EditProfile";
import idImg from "../../images/dashboard/id.png";
import closeIcon from "../../images/dashboard/close.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  faUserCircle,
  faShieldAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import "./Profile.css";

const user = {
  fullname: "Jane Doe",
  phone: "07000000000",
  email: "info@carigo.com",
  address: "No. 12, Kikero Street, Lagos",

  bank: {
    accountName: "Jane Doe",
    accountNumber: "01200023923",
    bankName: "Access Bank",
  },

  verification: {
    bvn: false,
    nin: true,
  },
};

const Profile = (props) => (
  <React.Fragment>
    <div className="dashboard-body">
      <h4>Profile</h4>
      <div className="profile-body">
        <div className="profile-left">
          <Card title="Personal Data" topColor="blue">
            <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            <h5>{props.user.first_name + " " + props.user.last_name}</h5>
            <h5>{props.user.phone_number}</h5>
            <h5>{props.user.email}</h5>
            <h5>{props.user.address}</h5>
            <FontAwesomeIcon icon={faShieldAlt} className="shield-icon" />
          </Card>
        </div>
        <div className="profile-right">
          <Card title="Bank Detail" topColor="#FF6584">
            <h5>{user.bank.accountName}</h5>
            <h5>{user.bank.accountNumber}</h5>
            <h5>{user.bank.bankName}</h5>
          </Card>
          <Card title="Verification" topColor="#40DA86">
            <span>
              <h5>BVN</h5>
              <FontAwesomeIcon
                icon={user.verification.bvn ? faCheckCircle : faTimesCircle}
                size="lg"
                color="#5ED8A2"
              />
            </span>
            <span>
              <h5>Identification</h5>
              <FontAwesomeIcon
                icon={user.verification.nin ? faCheckCircle : faTimesCircle}
                size="lg"
                color="#5ED8A2"
              />
            </span>
          </Card>
          <Card title="Security" topColor="#6C63FF">
            <span>
              <h5>Password</h5>
              <FontAwesomeIcon icon={faLock} size="lg" color="#6C63FF" />
            </span>
          </Card>
        </div>
      </div>
    </div>
    <Modal render={() => <EditBank />} />

    {/* ****************************Edit start************************ */}
    {/* <div className="edit-page">
      <div className="edit-modal">
        <img
          // onClick={this.handleDetailClose}
          src={closeIcon}
          alt="close"
          className="close"
        /> */}
    {/* ******************verification details****************  */}
    {/* <div className="title">
          <h3>Edit Verification details</h3>
        </div>
        <div className="main">
          <div className="left">
            <form action="">
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="bvn">Bank verification details</label>
                  <input
                    // onInput={this.handleInput}
                    type="text"
                    name="bvn"
                    id="bvn"
                    // value={}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="TypeOfId">Type of ID</label>
                  <select name="TypeOfId" id="TypeOfId">
                    <option value="">Drivers License</option>
                    <option value="">Voters card</option>
                    <option value="">Inpernational Passport</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <div className="input full">
                  <label htmlFor="">upload ID</label>
                  <input
                    // onInput={this.handleInput}
                    type="file"
                    name="id"
                    id="id"
                    // value={}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={idImg} alt="user ID image" />
          </div>
        </div> */}

    {/* *******************Edit bank details******************* */}

    {/* <div className="title">
          <h3>Edit bank details</h3>
        </div>
        <div className="main col">
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input
                // onInput={this.handleInput}
                type="text"
                name="bvn"
                id="bvn"
                // value={}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <input
                // onInput={this.handleInput}
                type="text"
                name="bvn"
                id="bvn"
                // value={}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input full">
              <label htmlFor="bvn">Bank verification details</label>
              <select name="bank" id="bank">
                <option value="Diamond Bank">Diamond Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="Union Bank">Union Bank</option>
                <option value="UBA Bank">UBA Bank</option>
              </select>
            </div>
          </div>
        </div> */}

    {/* ***************************Edit personal details******************** */}
    {/* <div className="title">Edit personal details</div>
        <div className="main col">
          <div className="input-group">
            <div className="input half">
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="input half">
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="input-group">
            <div className="input half">
              <label htmlFor="">Phone Number</label>
              <input type="text" name="" id="" />
            </div>
            <div className="input half">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="input-group">
            <div className="input half">
              <label htmlFor="">Address</label>
              <input type="text" name="" id="" />
            </div>
            <div className="input half">
              <label htmlFor="">State</label>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div> */}

    {/* *******************************End********************* */}

    {/* <div className=" submit-group">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </div>
    </div> */}
  </React.Fragment>
);
export default Profile;
