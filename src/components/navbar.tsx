// import React from 'react'
import logo from "../assets/images/logo_icon.png"
import { useState } from "react"
import { Links } from "../constants";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleScroll = (e:React.MouseEvent, targetId:string) => {
    e.preventDefault();
    const targetElemeent = document.getElementById(targetId);
    if  (targetElemeent) {
        const offsetTop = targetElemeent.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        })
    }
    setIsMenuOpen(false);
  }
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4
      backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-l-full lg:shadow-lg bg-slate-950 bg-opacity-40">
        <img src={logo} alt="logo" className="ml-6 h-10"/>
        <div className="hidden space-x-6 lg:flex">
          {Links.map((link, index) => (
            <a key={index} href={`#${link.targetId}`} className={`text-sm text-[#] ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} onClick={(e) => handleScroll(e, link.targetId)}>
              {link.text}
            </a>
          )) }
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
           }
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {Links.map((link, index) => (
            <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" onClick={(e) =>
            handleScroll(e, link.targetId)}>
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default NavBar
