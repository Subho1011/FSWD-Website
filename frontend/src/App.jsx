import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn && <Header />}
      <main>
        <Outlet />
      </main>
      {isLoggedIn && <Footer />}
    </>
  );
};

export default App;
