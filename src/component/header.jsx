import React from "react";

function Header() {
  const custom = {
    color: "white",
    fontfamily: "McLaren"
  };

  return (
    <header className="head">
      <h1 style={custom}>Keeper</h1>
    </header>
  );
}

export default Header;
