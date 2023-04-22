import React from 'react';
import LinkedIn from '../Images/linkedin.svg';
import Github from '../Images/github.svg';

const Footer = () => {
  return (
    <div className="text-text-base flex justify-center">
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
                src={LinkedIn}
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/AyyyTran" target="_blank">
              <img className="w-5 h-5 fill-white" src={Github} alt="GitHub" />
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
