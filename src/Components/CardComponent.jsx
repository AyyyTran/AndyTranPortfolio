import React from 'react';
import ProjImage from '../Images/bcnails.png';

export default function CardComponent() {
  return (
    <div className="text-secondary w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
      <div>
        <img
          className="object-cover w-full h-full"
          src={[ProjImage]}
          alt="image"
        />
      </div>
      <div className="pl-2">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          BC Nails Salon
        </h4>
        <p className="mb-2 leading-normal">
          React Tailwind website for a local nail salon. Brought it thousands of
          clicks a month and around 100 clicks withing the first few months.
        </p>
        <button className="px-2 mx-2 py-2 text-sm text-text-base bg-primary rounded shadow">
          <a
            href="https://bcnails.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </button>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          <a
            href="https://github.com/AyyyTran/bcnails"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </button>
      </div>
    </div>
  );
}
