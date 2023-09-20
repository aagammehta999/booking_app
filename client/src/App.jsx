import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import IndexPage from "./Pages/IndexPage.jsx";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import UserContextProvider from "../UserContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<IndexPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/account/subpage:?" element={<AccountPage />} /> */}
          {/* <Route path="/account/bookings" element={<AccountPage />} /> */}
          {/* <Route path="/account/places" element={<AccountPage />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
