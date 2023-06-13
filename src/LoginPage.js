import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";

function LoginPage(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.userType === userType
    );
    if (user) {
      if (userType === "user") {
        return navigate("/user");
      } else if (userType === "manager") {
        return navigate("/manager");
      }
    } else {
      alert("Invalid username, password, or user type");
    }
  };

  return (
    <div className="login-form-container">
      <h1>Log IN</h1>
      <Form>
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
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUserType">
          <Form.Label>User Type</Form.Label>
          <Form.Control
            as="select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log In
        </Button>
        <p>OR</p>
        <Button variant="secondary" onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
