import React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";

const App = () => {
  return (
    <div className="container">
      <a
        href="#mainContainer"
        id="skip-to-content-anchor"
        className="skip-to-content-visible"
      >
        <u>Skip To Main Content</u>
      </a>
      <Header />
      <div className="flex-row">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
