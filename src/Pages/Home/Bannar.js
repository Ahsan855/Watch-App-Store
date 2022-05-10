import React from "react";
import bannar from "../../image/bannar.png";

const Bannar = () => {
  return (
    <div class="hero min-h-screen bg-[#F6F6F6]">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={bannar} />
        <div className="text-left">
          <h3>Nice Top Series</h3>
          <h1 class="text-5xl font-bold pt-2">BLack Great Addition</h1>
          <p class="py-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <button class="btn btn-outline btn-primary font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
