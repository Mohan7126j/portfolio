import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Signup from "./components/Signup";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
              
          }
        />
        <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
      </Routes>
    );
  }
}

export default App;
