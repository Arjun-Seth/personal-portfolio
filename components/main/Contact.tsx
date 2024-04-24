"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Socials } from "@/constants";
import Image from "next/image";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // console.log("Client side: ", process.env.SECRET_KEY);
  // console.log("SERVER side: ", process.env.SECRET_KEY);
  const formRef = useRef(null);
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     process.env.EMAILJS_SERVICE_ID,
    //     process.env.EMAILJS_TEMPLATE_ID,

    //     {
    //       from_name: form.name,
    //       to_name: "Arjun",
    //       from_email: form.email,
    //       to_email: "arjun.drag007@gmail.com",
    //       message: form.message,
    //     },
    //     process.env.EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-20 z-[30] pb-32"
      id="contact"
    >
      <h1 className="text-4xl md:text-[40px] lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 lg:pb-24">
        Contact
      </h1>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-32 2xl:gap-80">
        <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12 xl:mt-12 justify-center">
          <div className="flex text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-300 justify-center">
            Let&apos;s Work <br />
            together
          </div>
          <div className="text-slate-200  flex flex-col items-center lg:items-start">
            <h2 className="text-2xl xl:text-3xl font-semibold ">Mail</h2>
            <span className="text-sm xl:text-base md:font-light">
              Arjun.drag007@gmail.com
            </span>
          </div>
          <div className="text-slate-200  flex flex-col items-center lg:items-start">
            <h2 className="text-2xl xl:text-3xl font-semibold ">Address</h2>
            <span className="text-sm xl:text-base md:font-light">
              Greater noida, India
            </span>
          </div>
          <div className="text-slate-200  flex flex-col items-center lg:items-start ">
            <h2 className="text-2xl xl:text-3xl font-semibold ">Phone</h2>
            <span className="text-sm xl:text-base md:font-light">
              &#43;91 7542090725
            </span>
          </div>
          <div className="flex justify-center gap-8 lg:justify-start ">
            {Socials.map((social) => (
              <React.Fragment key={social.id}>
                <a href={social.href} target="_blank">
                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={28}
                    height={28}
                  />
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden  `}
        >
          <div className=" border border-[#2A0E61] py-8 px-6 xl:p-12 rounded-lg  shadow-lg ">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className=" r flex flex-col gap-8 w-72 md:w-80 xl:w-96"
            >
              <label className="flex flex-col">
                <span className="text-slate-100 font-medium mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-transparent p-3 placeholder:text-secondary text-slate-300 border-2 border-[#2a0e61] focus:border-purple-500/50 outline-none rounded-lg font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-slate-100 font-medium mb-4">
                  Your email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-transparent p-3 text-slate-300 border-2 border-[#2a0e61] focus:border-purple-500/50 outline-none rounded-lg font-medium "
                />
              </label>
              <label className="flex flex-col">
                <span className="text-slate-100 font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-transparent p-3 text-slate-300 border-2 border-[#2a0e61] focus:border-purple-500/50 outline-none rounded-lg font-medium "
                />
              </label>

              <button
                type="submit"
                className="button-primary py-2 px-8 rounded-lg outline-none w-fit text-slate-100 font-medium shadow-md "
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// };

// export default Contact;
