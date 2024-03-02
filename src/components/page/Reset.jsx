import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { resetUser } from "../../config/firebase";

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          placeholder="Enter email address"
        />
        <button
          className="bg-black text-white p-1 rounded-md"
          onClick={() => resetUser(email)}
        >
          Send Password Reset Email
        </button>
      </div>
      <p>
        Don't you have an account?
        <NavLink to="/register" className="underline">
          {" "}
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Reset;
