import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleSignUpClick = () => {
    navigate("/signup", { state: { userType } });
  };

  return (
    <div className="home-container">
      <h1>Welcome to my app!</h1>
      <p>Please choose your user type:</p>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Select an option</option>
        <option value="admin">Manager</option>
        <option value="user">User</option>
      </select>
      <Button disabled={!userType} onClick={handleSignUpClick}>
        Sign Up
      </Button>
    </div>
  );
}

export default Home;
