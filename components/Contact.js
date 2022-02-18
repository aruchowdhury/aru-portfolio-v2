import SectionTitle from "./SectionTitle";
import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function Contact() {
  const [contactmessage, setContactMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_doozs4e",
        e.target,
        "user_mMZXoPDyiESPgqzGMRJvd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setContactMessage(true);
  };
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <SectionTitle text1="Contact" text2="Message Me.." />
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center mt-10 row-start-1 sm:row-start-1">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-teal-500 leading-normal">
            Contact Me.
          </h3>
          <p className="my-2 text-teal-500">
            I can develop custom develope your we b application in react.
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <form className="w-full mt-2 p-2 text-teal-500" onSubmit={sendEmail}>
            <div className="block mb-6">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                className=" block w-full h-8 mt-2 border-none rounded-md shadow-md bg-lightmegenta focus:ring-2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div className="block mb-6">
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                className=" block w-full h-8 mt-2 border-none rounded-md shadow-md bg-lightmegenta focus:ring-2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div className="block mb-6">
              <label>Email address: </label>
              <input
                name="email"
                type="email"
                className=" block w-full h-8 mt-2 border-none rounded-md shadow-md bg-lightmegenta focus:ring-2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>
            <div className="block mb-6">
              <label>Message:</label>
              <textarea
                name="message"
                className=" block w-full mt-2 border-none rounded-md shadow-md bg-lightmegenta focus:ring-2 focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                rows="4"
              />
            </div>
            <div className="mb-6">
              <input
                type="submit"
                value="Submit"
                className="font-medium mt-8 tracking-wide py-2 px-5 sm:px-8 border-teal-500 text-megenta bg-teal-500 border-2 rounded capitalize hover:bg-teal-800 hover:text-white hover:border-teal-800 transition-all duration-500"
              />
            </div>
            <span className="mt-3 text-center text-teal-500 text-sm block">
              {contactmessage
                ? "Your message has been send. I will contact with you soon"
                : null}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
