"use client";
import React, { useState } from "react";
import { firestore } from "@/firebase/database";
import { addDoc, collection } from "firebase/firestore";

interface props {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  title: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

interface values {
  email: string;
  name: string;
  message: string;
}

export default function Form() {
  const [formValue, setFormValue] = useState<values>({
    email: "",
    name: "",
    message: "",
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);

  // Handle change for form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendMessage = async (formValue: values) => {
    if (
      formValue.email === "" ||
      formValue.message === "" ||
      formValue.name === ""
    ) {
      return alert("Some fields are empty. Please fill in all fields.");
    }
    try {
      const messageData = await addDoc(
        collection(firestore, "formMessage"),
        formValue
      );
      console.log("Message sent with ID: ", messageData.id);

      setNotification({
        message: "Message sent successfully!",
        type: "success",
      });

      setFormValue({ email: "", name: "", message: "" });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error("Error sending message: ", error);

      // Show error notification
      setNotification({
        message: "Error sending message.",
        type: "error", // error type
      });

      // Clear notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(formValue);
      }}
    >
      <div className="w-screen h-screen max-h-max flex flex-col justify-center items-center font-thin text-slate-500">
        <div className="w-[700px] flex justify-center text-4xl md:text-4xl xs:text-3xl text-primary pt-20 pb-10 flex-col ">
          <h1 className="text-center font-bold">Send me a message!</h1>
          <label className="text-center md:text-base xs:text-sm text-base font-medium text-slate-700 mt-5">
            Got a question, or just want to say hello? <br /> Go ahead.
          </label>
        </div>
        <div className="flex flex-row justify-center items-center w-[700px] space-x-3 mt-10 xs:flex-col md:flex-row">
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            title="Your Name"
            value={formValue.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Your Email Address"
            name="email"
            title="Email Address"
            value={formValue.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-[700px] md:w-[700px] mt-11 xs:w-10/12">
          <div className="w-full xs:pb-3">
            <textarea
              name="message"
              placeholder="Message"
              value={formValue.message}
              onChange={handleChange}
              className="resize-none w-full h-40 group border-b-2 bg-transparent outline-none focus:border-b-2 peer focus:border-primary duration-150 focus:placeholder:text-transparent p-2 xs:h-20"
            ></textarea>
            <h1 className="peer-focus:text-primary -translate-y-[200px] xs:-translate-y-[150px]">
              Your Message
            </h1>
            <div className="w-full flex justify-center ">
              <button className="w-96 h-14 bg-white border-2 border-primary text-primary group hover:text-white overflow-hidden ">
                <div className="w-full h-full -translate-x-[101%] group-hover:translate-x-[0%] bg-primary duration-200"></div>
                <div className="-translate-y-10 font-semibold ">Send</div>
              </button>
            </div>
          </div>
        </div>

        {/* Show notification message */}
        {notification && (
          <div
            className={`fixed font-bold top-10 left-1/2 transform -translate-x-1/2 p-4  shadow-lg text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </form>
  );
}

function Input({ type, placeholder, onChange, value, name, title }: props) {
  return (
    <div className="w-1/2 group xs:pb-3">
      <input
        type={type}
        placeholder={"Enter " + placeholder}
        className="w-full h-10 group border-b-2 bg-transparent outline-none focus:border-b-2 peer focus:border-primary duration-150 focus:placeholder:text-transparent p-2"
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      <h1 className="peer-focus:text-primary duration-200 -translate-y-16 ">
        {title}
      </h1>
    </div>
  );
}
