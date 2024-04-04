import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";

import { Market } from "./pages/Market";
import { Landing } from "./pages/Landing";
import { Header } from "./pages/Header";
import { FullDashboard } from "./pages/FullDashboard";
import { Login } from "./pages/login";
import  Education  from "./education/CourseWeb/coursewebapp/src/Education";
import Events from "./eventapp/src/Events";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/fulldashboard"
            element={<FullDashboard></FullDashboard>}
          />
          <Route path="/market" element={<Market />} />
          <Route path="/learnmore" element={<Education/>} />
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
