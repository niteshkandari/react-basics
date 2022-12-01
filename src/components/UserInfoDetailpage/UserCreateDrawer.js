import React, { useState } from "react";
import {} from "../../"
export const UserCreateDrawer = ({ onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name,email,phone,address);
  }
  return (
    <div
      className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80  dark:bg-gray-800 transition-{left}  duration-300 ease-in-out top-0 ${
        isOpen ? "left-0" : "-left-80"
      }`}
    >
      <h5 className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Create
      </h5>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form action="#" className="mb-6" onSubmit={handleSubmitForm}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Let us know how we can help you"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            adddress
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Let us know how we can help you"
            required={true}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Let us know how we can help you"
            required={true}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          submit
        </button>
      </form>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          lorem ipsum dolor sit amet, consectetur adipis
        </a>
      </p>
    </div>
  );
};
