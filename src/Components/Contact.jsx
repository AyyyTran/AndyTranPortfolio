import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Email from '../Images/mail.svg';
import toast, {Toaster} from 'react-hot-toast';

export const Contact = () => {
  const form = useRef();

  const Success = () =>
    toast.success('Message has been sent!', {position: 'bottom-center'});
  const Fail = () =>
    toast.error('Whoops, something went wrong! Try again later!', {
      position: 'bottom-center',
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5y8apyj',
        'template_gpapg1g',
        form.current,
        'PNeNItWIexFWGMMwW'
      )
      .then(
        (result) => {
          console.log(result.text);
          Success();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Fail();
          form.current.reset();
        }
      );
  };

  return (
    <div className="mb-8">
      <Toaster bottom-center />
      <div
        className="text-4xl text-center font-bold h-full pt-28 pb-4"
        id="contact"
      >
        Get in Touch!
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="md:flex-col md:justify-center items-center p-8">
          <div className="flex items-center justify-center py-5 ">
            <svg
              className="text-4xl bg-primary rounded-full p-2"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>{' '}
            <div className="px-4 text-xl">AyyyTran@gmail.com</div>
          </div>
          <img
            className="w-[300px] mx-auto my-4 md:px-4 md:w-[450px]"
            src={Email}
            alt="mail"
          />
        </div>
        <form
          className=" flex-col justify-center items-center h-full md:p-8"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 px-6">
            <div className="py-2 md:pr-2">
              <label className="text-primary font-medium">Name</label>
              <input
                className="text-grey bg-secondary border-4 rounded-lg border-primary py-2 px-4 block w-full focus:outline-none focus:border-blue-600"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>
            <div className="py-2 md:pl-2">
              <label className="text-primary font-medium">Email</label>
              <input
                className="text-grey bg-secondary border-4 rounded-lg border-primary py-2 px-4 block w-full focus:outline-none focus:border-blue-600"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
          </div>
          <div className="px-6 py-2">
            <label className="text-primary font-medium">Subject</label>
            <input
              className="text-grey bg-secondary border-4 rounded-lg border-primary py-2 px-4 block w-full focus:outline-none focus:border-blue-600"
              type="text"
              placeholder="Enter Subject"
              name="subject"
            />
          </div>
          <div className="px-6 py-2">
            <label className="text-primary font-medium">Message</label>
            <textarea
              className="text-grey bg-secondary border-4 rounded-lg border-primary py-2 px-4 block w-full h-40 resize-none focus:outline-none focus:border-blue-600"
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <div className="py-4 flex justify-center">
            <div className="flex justify-center bg-primary rounded-3xl text-center">
              <input
                className="   text-white font-medium py-2 pl-4 pr-2 cursor-pointer hover:bg-blue-700"
                type="submit"
                value="Send"
              />
              <img
                className="w-4 h-4 mt-3 mr-3"
                src=".\src\Images\send.svg"
                alt="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
