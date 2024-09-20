// import React from 'react'
import { SocialMediaLinks } from "../constants"

function Footer() {
  return (
    <div className="bg-slate-950 pt-8" id="contact">
      <div className="flex items-center justify-center gap-8">
        {SocialMediaLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy;PawSitters. All rights reseved
      </p>
    </div>
  )
}

export default Footer
