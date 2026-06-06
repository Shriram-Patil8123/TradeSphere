import React from "react";

function Hero() {
  return (
    <div className="container mt-5">

      {/* Title + Button */}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Support Portal</h1>

        <button className="btn btn-primary">
          My tickets
        </button>
      </div>

      {/* Search */}
      <div className="input-group input-group-lg mt-3">
        <span className="input-group-text">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}

export default Hero;
