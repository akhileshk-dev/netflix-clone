import React, { useEffect,useState } from 'react';
import "./Nav.css";

const Nav = () => {
  const [show,hadleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
hadleShow(true)
      }else hadleShow(false);
      
    })
   return ()=>{
    window.removeEventListener("scroll",()=>{
      console.log("re");
    })
   }
  },[show])
  return (
    <div className={`nav ${show&&'nav__black'}`}>
        <img className='nav__logo' src='https://cdn-icons-png.flaticon.com/128/5977/5977590.png' alt='netflix__logo'/>
        <img className='navAvatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="navAvatar"  />
    </div>
  )
}

export default Nav