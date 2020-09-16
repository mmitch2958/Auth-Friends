import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom"

export default function Login () {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState("")
  //TODO: ISLOADING SPINNER STATE.
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
    <div>Login component says hi
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
        //need to find the magical list of all the diff input types....
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