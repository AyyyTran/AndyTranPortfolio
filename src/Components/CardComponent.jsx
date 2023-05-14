import React from 'react';

export default function CardComponent(data) {
  return (
    <div className="text-secondary w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
      <div>
        <img
          className="object-cover w-full h-full"
          src={data.imageURL}
          alt={data.imageDesc}
        />
      </div>
      <div className="pl-2">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {data.heading}
        </h4>
        <p className="mb-2 leading-normal">{data.description}</p>
        <button className="px-2 mx-2 py-2 text-sm text-text-base bg-primary rounded shadow">
          <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </button>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          <a href={data.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
      </div>
    </div>
  );
}
