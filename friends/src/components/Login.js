import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWA";
import { useHistory } from "react-router-dom"

export default function Login () {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log("login Posted!!!", res.data.payload);
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");

      })
      .catch(err => {
        console.log(err.response.data.error)
        setError(err.response.data.error)
      })
  }

  return (
    <div>Login 
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}