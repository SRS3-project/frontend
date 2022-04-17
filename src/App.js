import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <main className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;