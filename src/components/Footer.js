import React from "react";

function Footer() {
  const FooterStyle = {
    textAlign: "center",
    paddingBottom: "20px",
    // position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#efefef",
  };
  return (
    <div style={FooterStyle}>
      <p>In-store Pickup available at:</p>
      <p>The Treble-maker, 123 Crescendo Ave, Melody, WA 98XXX</p>
    </div>
  );
}

export default Footer;
