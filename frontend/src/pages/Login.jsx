import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/register")
      .then((res) => console.log(res.data));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      alert("Login Successful");
      const token = response.data.token;
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/account");
      window.location.reload();
      localStorage.setItem("token", token);
      localStorage.setItem("name", username);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="border-2 border-white rounded-md text-center w-[500px] h-[300px] p-9 m-5"
        >
          <label>Username</label>
          <br />
          <input
            value={username}
            className="rounded-xl bg-zinc-700 text-sm w-[300px] h-[30px] p-3"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            className="rounded-xl text-sm  bg-zinc-700 w-[300px] h-[30px] p-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button
            type="submit"
            className="border rounded-xl w-[100px] h-[30px] text-sm"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex bg-cyan-600 justify-center  w-[50%] items-center text-4xl text-white ">
        LOGIN
      </div>
    </div>
  );
};

export default Login;
