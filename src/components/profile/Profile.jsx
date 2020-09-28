import React, { useState, useEffect } from "react";
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
import APIClient from "../../services/dataService";
import { toast } from "react-toastify";

const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [verification, setVerification] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const user = await APIClient.getCurrentUser();
    const verification = user.verification ? user.verification : {};
    setVerification(verification);
    setCurrentUser(user);
  };

  const handleProfileInput = (e) => {
    const user = { ...currentUser };
    user[e.target.name] = e.target.value;
    setCurrentUser(user);
  };

  const handleVerificationInput = (e) => {
    const modifiedVerification = { ...verification };
    if (e.target.type === "file") {
      const uploadedFile = e.target.files[0];
      modifiedVerification[e.target.name] = uploadedFile;
    } else {
      modifiedVerification[e.target.name] = e.target.value;
    }
    setVerification(modifiedVerification);
  };

  const handleEditPersonalDetails = async () => {
    try {
      await APIClient.editUser(currentUser);
      toast("Personal details updated successfully");
      setModalVisible({ editPersonal: false });
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleVerification = async () => {
    try {
      verification.user = currentUser.id;
      const data = new FormData();
      for (let key in verification) {
        data.append(key, verification[key]);
      }

      currentUser.is_verified
        ? await APIClient.updateUserVerification(data, verification.id)
        : await APIClient.verifyUser(data);

      setModalVisible({ editVerification: false });
      props.history.push("/packages/profile/");
      toast("your have been verified successfully");
    } catch (e) {
      console.log(e.response);
      toast.error("could not verify you at this moment");
    }
  };

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
              <h5>{currentUser.first_name + " " + currentUser.last_name}</h5>
              <h5>{currentUser.phone_number}</h5>
              <h5>{currentUser.email}</h5>
              <h5>{currentUser.address}</h5>
              <FontAwesomeIcon
                icon={currentUser.is_verified ? faShieldAlt : faTimesCircle}
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
              <h5>{verification.account_name}</h5>
              <h5>{verification.account_number}</h5>
              <h5>{verification.bank_name}</h5>
            </Card>
            <Card
              title="Verification"
              topColor="#40DA86"
              onEditClick={() => setModalVisible({ editVerification: true })}
            >
              <span>
                <h5>BVN</h5>
                <FontAwesomeIcon
                  icon={verification.BVN ? faCheckCircle : faTimesCircle}
                  size="lg"
                  color="#5ED8A2"
                />
              </span>
              <span>
                <h5>Identification</h5>
                <FontAwesomeIcon
                  icon={verification.NIN ? faCheckCircle : faTimesCircle}
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
          data={currentUser}
          onInputChange={handleProfileInput}
          onSubmit={handleEditPersonalDetails}
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
          data={verification}
          onInputChange={handleVerificationInput}
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
          data={verification}
          onSubmit={() => handleVerification()}
          onInputChange={handleVerificationInput}
        />
      </EditModal>
    </React.Fragment>
  );
};
export default Profile;
