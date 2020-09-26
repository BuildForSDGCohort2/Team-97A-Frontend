import React, { useState, useEffect } from "react";
import Lottie from "lottie-react-web";
import loader from "../images/cicrle-loader.json";

const Loader = ({ text = "Please wait ... ", visible = true }) => {
  const [textCount, setTextCount] = useState(0);
  const timer = () => setTextCount(textCount + 1);

  useEffect(() => {
    if (textCount >= text.length) setTextCount(0);
    const id = setInterval(timer, 130);
    return () => clearInterval(id);
  }, [textCount]);

  return visible ? (
    <div style={styles.container}>
      <span style={styles.text}>{text.slice(0, textCount)}</span>
      <div>
        <Lottie
          style={styles.loader}
          autoPlay
          options={{
            animationData: loader,
          }}
        />
      </div>
    </div>
  ) : null;
};

const styles = {
  container: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backdropFilter: " blur(40px)",
    zIndex: 1,
  },

  loader: {
    width: "250px",
  },

  text: {
    color: "#ffff00",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "blue",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: "1px",
  },
};

export default Loader;
