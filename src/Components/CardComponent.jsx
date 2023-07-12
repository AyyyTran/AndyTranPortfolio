import React from 'react';

export default function CardComponent(data) {
  return (
    <div className="my-2 text-secondary mx-auto w-4/5 p-2 rounded-lg shadow-xl lg:flex ">
      <div>
        <img
          className="object-center w-full h-full "
          src={data.imageURL}
          alt={data.imageDesc}
        />
      </div>
      <div className="pl-2 w-full ">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {data.heading}
        </h4>
        <p className="mb-2 leading-normal">{data.description}</p>
        <button className="px-2 mx-2 py-2 text-sm text-text-base bg-primary rounded shadow hover:scale-105">
          <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </button>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:scale-110">
          <a href={data.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
      </div>
    </div>
  );
}
