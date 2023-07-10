import React from "react";
import { FaHandPeace, FaUser, FaArrowRight } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
const Featured = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-[1400px] mx-auto">
        <div>
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <FaHandPeace className="text-3xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Compensation</h2>
              <p>
                Get help from a caring and knowledgeable professional. Let us
                know.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <FaUser className="text-3xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Leadership Training</h2>
              <p>
                Get help from a caring and knowledgeable professional. Let us
                know.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <FcBusinessman className="text-3xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Corporates Programs</h2>
              <p>
                Get help from a caring and knowledgeable professional. Let us
                know.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
