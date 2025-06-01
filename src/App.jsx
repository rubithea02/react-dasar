import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Book from "./pages/Book"; // pastikan file ini ada
import Teams from "./pages/Teams";
import Contacts from "./pages/Contacts";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";





function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
