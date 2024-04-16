// import React, { useRef, useState } from "react";
// // import { styles } from "../sub/styles";

// // interface FormValues {
// //   name: string;
// //   email: string;
// //   message: string;
// // }

// // const Contact: React.FC = () => {
// //   const formRef = useRef(null);
// //   const [form, setForm] = useState<FormValues>({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     const { target } = e;
// //     const { name, value } = target;

// //     setForm({
// //       ...form,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setLoading(true);
// //   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20 w-full px-20"
//       id="contact"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         Contact
//       </h1>
//       {/* <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
//         Let &apos;s Work <br />
//         together
//       </div> */}
//       <div
//         className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//       >
//         <form className="mt-12 flex flex-col gap-8">
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               placeholder="What's your good name?"
//               className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-[600px]"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your email</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="What's your web address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={7}
//               name="message"
//               placeholder="What you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Contact;
