import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
// import App from ".App";
const App = () => {
  return (
    <div>
      <div className="min-h-screen  items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <Navbar />
        <Login />
      </div>
    </div>
  );
};

export default App;
