import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successfull Now you can login ");
    } catch (e) {
      alert("Registration failed PLease try again later");
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-2xl mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Aagam Mehta"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Have an account !!
            <Link className="underline text-black" to={"/login"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
