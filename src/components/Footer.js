import React from "react";

function Footer() {
  const FooterStyle = {
    marginTop: "50px",
    textAlign: "center",
    paddingBottom: "20px",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#efefef",
  };
  return (
    <div style={FooterStyle}>
      <p>This is a sample footer</p>
    </div>
  );
}

export default Footer;
