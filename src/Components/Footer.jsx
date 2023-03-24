import React from 'react';

const Footer = () => {
  return (
    <div className="text-white flex justify-center">
      <div className="flex-col ">
        <div className="text-sm py-4">
          {' '}
          <div className="flex justify-center">
            <a
              className="px-2"
              href="https://www.linkedin.com/in/ayyytran/"
              target="_blank"
            >
              <img
                className="w-5 h-5 fill-white"
                src=".\src\Images\linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/AyyyTran" target="_blank">
              <img
                className="w-5 h-5 fill-white"
                src=".\src\Images/github.svg"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div className="text-sm uppercase font-medium">
          © ANDY TRAN | VANCOUVER CANADA
        </div>
        <div className="text-sm py-4 flex justify-center uppercase font-light">
          THANK YOU!
        </div>
      </div>
    </div>
  );
};

export default Footer;