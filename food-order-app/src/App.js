import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { HomePage } from "./pages/HomePage";
import Nav from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;