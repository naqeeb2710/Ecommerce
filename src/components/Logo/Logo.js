import React from 'react'
import ElectroTech from "../../assets/img/farmlogo.png";

const Logo = (props) => {
  return (
    <div className='logos' onClick={props.click}>
      <img src={ElectroTech } alt="logo" width={'170px'}  />
    </div>
  )
}

export default Logo
