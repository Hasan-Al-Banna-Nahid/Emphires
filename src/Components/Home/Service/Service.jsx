import React from "react";
import { TypeAnimation } from "react-type-animation";
const Service = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <div>
          <img src="/Asset/98723-search-users.gif" alt="" />
        </div>
        <div>
          <TypeAnimation
            sequence={[
              "Why Choose Us",
              1000,
              "For Every Category",
              1000,
              "Verified Jobs",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              color: "#8e44ad",
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          <div>
            <h2 className="text-5xl font-bold text-slate-900 my-4">
              We Provide Best <br />
              Digital Services
            </h2>
            <p className="font-bold my-4">
              We are proud to offer top range of comprehensive employment <br />
              services such as payroll and benefits administration, HR
              management, and assistance.
            </p>
            <button className="btn btn-primary my-4">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
