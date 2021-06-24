import React from 'react';

const DesktopHeader= ()=> {

  window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0)
  })

    return(
      <React.Fragment>
      <header>
        <a href='/' class='logo'>LOGO</a>
      <ul>
        <li><a href='/home'>home</a></li>
        <li><a href='/testseries'>Test Series</a></li>
        <li><a href='/scholarship'>Scholarship</a></li>
        <li><a href='/institute'>Institute</a></li>
        <li><a href='/contactus'>Contact Us</a></li>
        <li><a href='/signin'>Sign in</a></li>
      </ul>
      </header>
      </React.Fragment>
     
    )
}
export default DesktopHeader;
