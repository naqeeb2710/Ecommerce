import React from 'react'
import ElectroTech from "../../assets/img/farmlogo.png";
import classes from "./Logo.css";

const Logo = (props) => {
  return (
    <div className={classes.logos} onClick={props.click}>
      <img src={ElectroTech } alt="logo" width={'170px'}  />
    </div>
  )
}

export default Logo
