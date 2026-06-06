import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      alert(response.data.message);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect to dashboard
      console.log(response.data.user);

      window.location.href =
  `http://localhost:3001?name=${encodeURIComponent(response.data.user.name)}`;
  
  //     window.location.href =
  // `http://localhost:3000?name=${encodeURIComponent(response.data.user.name)}`;

    } catch (err) {
      alert(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleLogin}>

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
                Login
              </button>

              <p className="text-center mt-3">
                New user? <a href="/signup">Sign Up</a>
              </p>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;