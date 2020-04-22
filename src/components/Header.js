import React from "react";

// font-family: 'Monoton', cursive;
// font-family: 'Abril Fatface', cursive;
// font-family: 'Lobster', cursive;

function Header() {
  const headerStyle = {
    textAlign: "center",
    marginBottom: 50,
    padding: 40,
    backgroundColor: "#efefef",
  };

  const headerStyleH1 = {
    fontFamily: "'Lobster', cursive",
  };

  const logo = {
    color: "",
  };

  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1 className="display-4" style={headerStyleH1}>
          The <span style={logo}>Treble-Maker</span>{" "}
          <small className="text-muted">Fine Musical Instruments</small>
        </h1>
        <h3 className="lead">For all your instrumental needs!</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
