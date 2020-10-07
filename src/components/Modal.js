import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, title, visible, setVisible }) => {
  const handleClose = () => {
    setVisible(false);
  };

  return visible ? (
    <div style={styles.container}>
      <div style={styles.modalTop}>
        <span style={styles.text}>{title}</span>
        <FontAwesomeIcon
          icon={faTimesCircle}
          width={20}
          color="white"
          style={styles.icon}
          title="Close"
          onClick={() => handleClose()}
        />
      </div>
      <div style={styles.modalBody}>{children}</div>
    </div>
  ) : null;
};

const styles = {
  container: {
    backdropFilter: " blur(30px)",
    position: "absolute",
    top: "0px",
    width: "90%",
    height: "90%",
    alignItems: "center",
    zIndex: 1,
  },

  icon: {
    cursor: "pointer",
  },

  modalTop: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FF2D64",
    margin: "20px",
    padding: "20px",
  },

  modalBody: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    minHeight: "350px",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
};

export default Modal;
