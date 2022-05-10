import React from "react";
import img from "../../image/image5.jpg";

const Subscribe = () => {
  return (
    <div className="flex justify-around items-center bg-gray-200">
      <div className="bg-white p-10 m-20 rounded-lg text-left">
        <h1 className="text-primary text-4xl pb-5">Tell Us Your Message</h1>
        <div className="w-full mx-auto">
          <input
            type="text"
            placeholder="Name"
            class="input input-primary w-full max-w-xs mb-5"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            class="input input-primary w-full max-w-xs mb-5"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="input input-primary w-full max-w-xs mb-5"
          />
          <br />
          <textarea
            class="textarea input input-primary w-full max-w-xs mb-5"
            placeholder="Comment"
          ></textarea>
        </div>
        <button class="btn btn-outline btn-primary">Send Massage</button>
      </div>

      <div>
        <img className="rounded-lg" src={img} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
