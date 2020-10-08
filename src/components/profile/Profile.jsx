import React, { useState } from "react";
import { EditBank, EditVerification, EditPersonalDetails } from "./EditProfile";
import EditModal from "./editProfileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShieldAlt,
  faCheckCircle,
  faTimesCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import "./Profile.css";

const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState({});
  const closeModals = () => {};

  return (
    <React.Fragment>
      <div className="dashboard-body">
        <h4>Profile</h4>
        <div className="profile-body">
          <div className="profile-left">
            <Card
              title="Personal Data"
              topColor="blue"
              onEditClick={() => setModalVisible({ editPersonal: true })}
            >
              <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
              <h5>{props.user.first_name + " " + props.user.last_name}</h5>
              <h5>{props.user.phone_number}</h5>
              <h5>{props.user.email}</h5>
              <h5>{props.user.address}</h5>
              <FontAwesomeIcon
                icon={props.user.is_verified ? faShieldAlt : faTimesCircle}
                className="shield-icon"
              />
            </Card>
          </div>
          <div className="profile-right">
            <Card
              title="Bank Detail"
              topColor="#FF6584"
              onEditClick={() => setModalVisible({ editBank: true })}
            >
              <h5>{props.verification.account_name}</h5>
              <h5>{props.verification.account_number}</h5>
              <h5>{props.verification.bank_name}</h5>
            </Card>
            <Card
              title="Verification"
              topColor="#40DA86"
              onEditClick={() => setModalVisible({ editVerification: true })}
            >
              <span>
                <h5>BVN</h5>
                <FontAwesomeIcon
                  icon={props.verification.BVN ? faCheckCircle : faTimesCircle}
                  size="lg"
                  color="#5ED8A2"
                />
              </span>
              <span>
                <h5>Identification</h5>
                <FontAwesomeIcon
                  icon={props.verification.NIN ? faCheckCircle : faTimesCircle}
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
      <EditModal
        visible={modalVisible.editPersonal}
        onClose={() => setModalVisible({ editPersonal: false })}
      >
        <EditPersonalDetails
          data={props.user}
          onInputChange={props.onProfilelInput}
          onSubmit={props.onEditPersonalDetails}
        />
      </EditModal>
      <EditModal
        visible={
          props.location.pathname === "/packages/profile/verify/"
            ? true
            : modalVisible.editBank
        }
        onClose={() => {
          props.history.push("/packages/profile/");
          setModalVisible({ editBank: false });
        }}
      >
        <EditBank
          data={props.verification}
          onInputChange={props.onVerificationInput}
          onSubmit={() =>
            setModalVisible({ editBank: false, editVerification: true })
          }
        />
      </EditModal>
      <EditModal
        visible={modalVisible.editVerification}
        onClose={() => {
          props.history.push("/packages/profile/");
          setModalVisible({ editVerification: false });
        }}
      >
        <EditVerification
          data={props.verification}
          onSubmit={() => props.onVerify()}
          onInputChange={props.onVerificationInput}
        />
      </EditModal>
    </React.Fragment>
  );
};
export default Profile;
