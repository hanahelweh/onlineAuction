import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState(
    location.state ? location.state.userType : ""
  );

  const create = (event) => {
    event.preventDefault();
    // Check if username already exists
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert("Username already taken");
      window.location.reload();
      return;
    }
    // Create user object
    const user = {
      username,
      password,
      age,
      name,
      email,
      address,
      userType,
    };
    // Save user object to localStorage
    localStorage.setItem(username, JSON.stringify(user));
    // Redirect to home page
    navigate("/login");
  };

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <Form onSubmit={create}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            as="select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="admin">Manager</option>
            <option value="user">User</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>OR</p>
        <Button variant="secondary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default SignUpForm;
