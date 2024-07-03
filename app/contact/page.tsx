/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "../_ui/contactForm";

export default function ContactPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="container flex h-full flex-col items-center px-10 pt-10">
        <div
          className={`h-full py-10 text-center transition-opacity duration-500 ease-in-out md:flex-col ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="mb-5 text-center font-sans text-xl text-black md:mb-0">
            Let's Talk
          </h3>
          <p className="mt-5 text-center text-sm">Send me something</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      ;
    </>
  );
}
