import React from "react";
import "./News.css";

const NewsLetter = () => {
  return (
    <div className="my-4">
      <div>
        <h2 className="text-slate-900 font-bold text-3xl text-center">
          Subscribe To Our Newsletter
        </h2>
        <div className=" flex gap-4 items-center justify-center p-6 mx-auto my-4 w-[1200px] bg-[#fd858f] h-[300px] rounded-lg">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Message"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
