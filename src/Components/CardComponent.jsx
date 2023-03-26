import React from 'react';

export default function CardComponent() {
  return (
    <div className="text-secondary w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
      <img
        className="object-cover w-24 lg:w-40 lg:h-40"
        src=".\src\Images\bulb.png"
        alt="image"
      />
      <div className="pl-2">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          react tailwind horizontal card image
        </h4>
        <p className="mb-2 leading-normal">
          react tailwind css horizontal card with image It is a long established
          fact that a reader will be distracted by the readable content.
        </p>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Live Demo
        </button>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Code
        </button>
      </div>
    </div>
  );
}
