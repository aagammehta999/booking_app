import { Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage.jsx";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<IndexPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
export default App;
