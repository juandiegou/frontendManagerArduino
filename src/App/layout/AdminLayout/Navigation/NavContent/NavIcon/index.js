import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const navIcon = (props) => {
  let navIcons = false;
  if (props.items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        <FontAwesomeIcon icon={props.items.icon} />
      </span>
    );
  }
  return navIcons;
};

export default navIcon;
