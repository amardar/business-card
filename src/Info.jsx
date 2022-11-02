import React from "react"
import ReactDOM from "react-dom"

function Info() {
  return (
  <div>

    <div className="info--style">
      <img src="../img/laura-face.png"/>
      <h1 className="user--name">Laura Smith</h1>
      <h2 className="user--position">Frontend Developer</h2>
      <h3 className="user--website">laurasmith.website</h3>
    </div>

    <div className="buttons">
      <button className="button-mail">
        <img src="../img/mail.svg"/>
        <p>Email</p>
      </button>
      <button className="button-linkedin">
         <img src="../img/linkedin.svg"/>
         <p>LinkedIn</p>
      </button>
    </div>

  </div> 
  )
}

export default Info;

// Photo, name, buttons
