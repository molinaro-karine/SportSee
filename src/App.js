import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Error404 from "./pages/Error404";

/**
 *
 * @returns Sportsee App with two different routes for main : Home or Error404
 */

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Sidebar />
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
