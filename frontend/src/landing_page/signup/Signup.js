// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;



import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(response.data.message);
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message || "Signup failed"
      );
    }
  };

   return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-5">

        <div className="card shadow p-4">

          <h2 className="text-center mb-4">
            Open a free account
          </h2>

          <form onSubmit={handleSignup}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="/login">Login</a>
            </p>

          </form>

        </div>

      </div>
    </div>
  </div>
);
}

export default Signup;