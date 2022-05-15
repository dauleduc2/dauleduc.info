import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";
import { MailIcon } from "@heroicons/react/solid";

interface ContactMeProps {
  setComponentOpenning: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const ContactMe: React.FunctionComponent<ContactMeProps> = ({
  setComponentOpenning,
}) => {
  return (
    <div className="section contact-me-section appear1">
      <h1 className="text-2xl font-bold text-center text-red-500 ">
        Get in touch with me
      </h1>
      <div className="form">
        <div className="field-line">
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
        <div className="field-line">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
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
        <div className="field-line">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="message"
              id="message"
              placeholder="your message"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Button text
        </button>
      </div>
      <div
        className="close-button"
        onClick={() => {
          setComponentOpenning(null);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default ContactMe;
