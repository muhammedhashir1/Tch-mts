import React from "react";
import Image from "next/image";

const paragraph =
  "The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what has been missing from online home search. The experts are always available with correct answers to anything.";
const author = "Peter Jones";

const Quotes = () => {
  return (
    <div className="bg-blue-100 h-640 p-16">
      {/* Title */}
      <h2 className="font-barlow text-25 font-bold text-black mb-4 text-center">The Canadian Home</h2>

      {/* Subhead */}
      <p className="font-barlow text-16 font-bold text-black mb-8 text-center">
        What customers say about The Canadian Home experience
      </p>

      {/* Cards Container */}
      <div className="flex flex-row justify-center">
        {[...Array(2)].map((_, index) => (
          <div
            key={index} // Use the index as the key
            className="h-84 w-314.2 bg-white overflow-hidden relative m-6 p-8"
          >
            {/* Left Quote Icon */}
            <Image
              src="/quotes/left.svg" // Add the correct path for your left quote image
              alt="Left Quote"
              width={40}
              height={40}
              className="absolute top-0 left-4"
            />

            {/* Right Quote Icon */}
            <Image
              src="/quotes/right.svg" // Add the correct path for your right quote image
              alt="Right Quote"
              width={40}
              height={40}
              className="absolute bottom-0 right-4"
            />

            {/* Quote Content */}
            <div className="h-271">
              <p className="font-barlow text-15 font-medium text-gray-600 text-center">{paragraph}</p>

              <p className="font-barlow text-18 font-bold text-center text-black mt-4">{author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
