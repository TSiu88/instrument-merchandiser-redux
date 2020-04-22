import React from "react";

function Header() {
  const headerStyle = {
    textAlign: "center",
    marginBottom: 50,
    paddingTop: 40,
  };

  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>An Instrument Store</h1>
        <h3>For all your instrumental needs!</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
