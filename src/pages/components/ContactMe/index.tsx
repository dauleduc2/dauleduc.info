import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";
import { MailIcon } from "@heroicons/react/solid";
import React from "react";
interface ContactMeProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const ContactMe: React.FunctionComponent<ContactMeProps> = ({
  setComponentOpening,
}) => {
  const [rows, setRows] = React.useState<number>(0);
  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setRows(5);
    } else {
      setRows(3);
    }
  }, []);

  return (
    <div className="z-20 relative flex flex-col w-full max-w-lg p-5 bg-white rounded-md appear1 max-h-[90%]  ">
      <h1 className="text-xl font-bold text-center text-red-500 lg:text-2xl ">
        Get in touch with me
      </h1>

      <div className="mt-3 space-y-5 form lg:mt-5">
        <div className="flex justify-between space-x-5 lg:flex-col lg:space-y-5 lg:space-x-0">
          <div className="w-full field-line">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="fullName"
                placeholder="your name"
                id="fullName"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="w-full field-line">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MailIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full pl-10 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>
        <div className="field-line">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              placeholder="your message"
              name="message"
              id="message"
              cols={10}
              rows={rows}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>

      <div
        className="close-button"
        onClick={() => {
          setComponentOpening(null);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default ContactMe;
