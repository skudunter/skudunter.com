import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
export default function ContactForm() {
  let value = 0;
  const form = useRef();
  if (localStorage.getItem("clicksOnSkuduntersPage")) {
    value = Number(localStorage.getItem("clicksOnSkuduntersPage"));
  } else {
    value = 0;
  }
  const [clicks, setClicks] = useState(value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const formData = { clicks, name, email, message, sent };

  // the errors in the form at fields
  const [clicksError, setClicksError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const formErrors = { clicksError, nameError, emailError, messageError };

  //init localstorage
  if (!localStorage.getItem("clicksOnSkuduntersPage")) {
    localStorage.setItem("clicksOnSkuduntersPage", formData.clicks);
  }
  const validateForm = () => {
    let validated = true;
    setEmailError("");
    setMessageError("");
    setNameError("");
    if (formData.clicks > 3) {
      validated = false;
      setClicksError("To many emails sent");
    }
    if (formData.name.length < 3) {
      validated = false;
      setNameError("Length has to be atleast 3");
    }
    if (formData.email.length < 5) {
      validated = false;
      setEmailError("Length has to be atleast 5");
    }
    if (formData.message.length < 5) {
      validated = false;
      setMessageError("Length has to be atleast 5");
    }
    if (!formData.email.includes("@")) {
      validated = false;
      setEmailError("Email has to be valid");
    }
    localStorage.setItem(
      "clicksOnSkuduntersPage",
      Number(localStorage.getItem("clicksOnSkuduntersPage")) + 1
    );
    setClicks(localStorage.getItem("clicksOnSkuduntersPage"));
    return validated;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSent(true);
      setName("");
      setMessage("");
      setEmail("");
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            //succesful - set borders green
            //console.log(succesfull)
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setSent(false);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-1/4 z-10 text-sm md:text-md lg:text-lg mb-10 mx-auto p-1 rounded-sm bg-primary"
      >
        <label
          htmlFor="from_name"
          className="block font-medium text-white mb-2"
        >
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="name"
          value={formData.name}
          onChange={handleNameChange}
          className={`${
            formErrors.nameError.length > 0
              ? "border-red-500 border-2 animate-vibrate"
              : ""
          } ${
            sent ? "border-green-500 border-2" : ""
          } transition duration-200 ease-in-out w-full px-1 mb-4 py-1 text-gray-600 rounded-sm focus:outline-none`}
        />
        <label
          htmlFor="from_email"
          className="block font-medium  text-white mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="from_email"
          placeholder="somebody@example.com"
          id="from_email"
          value={formData.email}
          onChange={handleEmailChange}
          className={`${
            formErrors.emailError.length > 0
              ? "border-red-500 border-2 animate-vibrate"
              : ""
          } ${
            sent ? "border-green-500 border-2" : ""
          } w-full px-1 py-1 mb-4 text-gray-600 rounded-sm border focus:outline-none`}
        />
        <label htmlFor="message" className="block font-medium text-white mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="message"
          value={formData.message}
          onChange={handleMessageChange}
          className={`${
            formErrors.messageError.length > 0
              ? "border-red-500 border-2 animate-vibrate"
              : ""
          } ${
            sent ? "border-green-500 border-2" : ""
          } w-full px-1 py-1 mb-4 text-gray-600 transition rounded-sm border focus:outline-none `}
        ></textarea>
        <button
          type="submit"
          className="bg-tersiary transition duration-500 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function helperText(text) {
  return (
    <div>
      <p className="">{text}</p>
    </div>
  );
}
