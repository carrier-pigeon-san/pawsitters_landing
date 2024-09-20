// import React from 'react'

import { Content, Team } from "../constants"

function About() {
    return (
      <section className="mx-auto mb-8 text-gray-600 bg-slate-300 p-4" id="about">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl text-slate-500">About Us</h2>
        <p className="text-center">{Content.paragraph1}</p>
        <p className="text-center">{Content.paragraph2}</p>
        <div className="md:flex p-4 gap-12 justify-center items-center">
          {Team.map((member, index) => (
            <div key={index} className="md:w-1/4 flex flex-col items-center p-6">
              <img src={member.photo} alt="portrait" className="object-cover w-36 rounded-full"/>
              <p className="text-center text-gray-900 text-lg font-semibold">{member.name}</p>
              <div className="flex gap-1 text-indigo-700">
                <span className="px-1">
                  <a href={member.github}>Github</a>
                </span>
                <span className="px-3 border-x border-gray-500">
                  <a href={member.linkedin}>LinkedIn</a>
                </span>
                <span className="px-1">
                  <a href={member.twitter}>X</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default About
  