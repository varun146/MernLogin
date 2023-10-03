import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/register", { email, username, password })
      .then(() => {
        alert("Registeration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          onSubmit={handleRegister}
          action=""
          className="text-center border rounded-lg w-[500px] h-[400px] p-9 m-5"
        >
          <label>Email</label>
          <br />
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-[300px] text-sm h-[30px] rounded-xl p-3 bg-zinc-700"
          />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-[300px] text-sm h-[30px] rounded-xl p-3 bg-zinc-700"
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            className="w-[300px] text-sm h-[30px] rounded-xl p-3 bg-zinc-700"
          />
          <br />
          <br />
          <button
            type="submit"
            onSubmit={handleRegister}
            className="w-[200px] hover:bg-teal-900 h-[30px]   rounded-xl border text-white"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="bg-teal-800 w-[50%] h-[100%] flex justify-center items-center ">
        <h2 className="text-3xl text-white ">Sign Up</h2>
      </div>
    </div>
  );
};

export default SignUp;
