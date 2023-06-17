import React from 'react'
import "./Footer.css";

const Footer = ({fcontent}) => {

  return (
    <div className='footer'>
        <h1 className='footer_headline'>green mate</h1>
        <p className='footer_content'>{fcontent}</p>
    </div>
  )
}

export default Footer
