import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Education from './Education';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Education />
    <ToastContainer />
  </div>
);


