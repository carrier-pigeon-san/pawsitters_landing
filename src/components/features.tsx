// import React from 'react'
import sign_up from "../assets/images/sign_up_interface.png"
import sitters from "../assets/images/sitters_interface.png"
import booking from "../assets/images/booking_interface.png"

function Features() {
  return (
    <section className="container mx-auto py-16" id="features">
      <h2 className="mb-8 text-center text-3xl tracking-tighter
      lg:text-4xl text-slate-500 font-semibold">How It Works</h2>
      <div className="md:grid grid-cols-2 text-gray-600 py-10 bg-white">
        <div className="md:col-span-1 h-full w-4/5 md:w-full overflow-hidden rounded-lg shadow-slate-400 shadow-lg m-auto">
          <img src={sign_up} alt="Sign up" className="w-full object-cover"/>
        </div>
        <div className="flex px-8 items-center">
          <div className="flex flex-col gap-6 justify-start pt-8 ">
            <h1 className="text-xl lg:text-3xl font-semibold text-center md:text-start">Step 1</h1>
            <h2 className="text-2xl text-center lg:text-start lg:text-4xl">Navigate to the sign up page and create an account</h2>
            <p className="text-center lg:text-start text-sm md:text-base">Key in your information on the sign up form and submit to create an account.</p>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 text-gray-600 py-10">
        <div className="flex px-8 items-center">
          <div className="flex flex-col gap-6 justify-start">
            <h1 className="text-xl lg:text-3xl font-semibold text-center md:text-start">Step 2</h1>
            <h2 className="text-2xl text-center lg:text-start lg:text-4xl">Login to your account and browse through listed service providers</h2>
            <p className="text-center lg:text-start text-sm md:text-base">Make use of provided filters to narrow down service providers according to your preference</p>
          </div>
        </div>
        <div className="md:col-span-1 h-full w-4/5 md:w-full overflow-hidden rounded-lg shadow-slate-400 shadow-lg m-auto">
          <img src={sitters} alt="Sign up" className="w-full object-cover"/>
        </div>
      </div>
      <div className="md:grid grid-cols-2 text-gray-600 py-10 bg-white">
        <div className="md:col-span-1 h-full w-4/5 md:w-full overflow-hidden rounded-lg shadow-slate-400 shadow-lg m-auto">
          <img src={booking} alt="Sign up" className="w-full object-cover"/>
        </div>
        <div className="flex px-8 items-center">
          <div className="flex flex-col gap-6 justify-start pt-8">
            <h1 className="text-xl lg:text-3xl font-semibold text-center md:text-start">Step 3</h1>
            <h2 className="text-2xl text-center lg:text-start lg:text-4xl">Select your preferred service provider and make a booking</h2>
            <p className="text-center lg:text-start text-sm md:text-base">Specify the duration of your booking and submit your booking request.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
