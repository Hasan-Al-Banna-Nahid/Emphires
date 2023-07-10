import React from "react";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <div>
      <h2 className="text-center text-5xl my-4 font-bold">Our Sponsors</h2>
      <Marquee>
        <div className="mx-6">
          {" "}
          <img src="/Asset/client-02.png" alt="" />
        </div>
        <div className="mx-6">
          {" "}
          <img src="/Asset/client-03.png" alt="" />
        </div>
        <div className="mx-6">
          {" "}
          <img src="/Asset/client-04.png" alt="" />
        </div>
        <div className="mx-6">
          {" "}
          <img src="/Asset/client-05.png" alt="" />
        </div>
        <div className="mx-6">
          {" "}
          <img src="/Asset/client-06.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsor;
