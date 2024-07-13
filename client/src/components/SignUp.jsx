import React, { useState } from "react";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    
    }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <div>
        Register As
        <input
          type="radio"
          name="UserType"
          value="User"
          onChange={(e) => setUserType(e.target.value)}
        />
        User
        <input
          type="radio"
          name="UserType"
          value="Admin"
          onChange={(e) => setUserType(e.target.value)}
        />
        Admin
      </div>
      {userType === "Admin" ? (
        <div className="mb-3">
          <label>Secret Key</label>
          <input
            type="text"
            className="form-control"
            placeholder="Secret Key"
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>
      ) : null}

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login?</a>
      </p>
    </form>
  );
}

export default SignUp;
