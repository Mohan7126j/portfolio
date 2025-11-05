import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'modern-normalize';
import App from "./App";
import './index.css';

class A extends Component {
  render() {
    return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A />);
