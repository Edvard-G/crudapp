import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
};

Header.defaultProps = {
  text: "First CRUD app",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
