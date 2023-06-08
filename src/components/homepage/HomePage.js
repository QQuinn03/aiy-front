import React from "react";

import Service from "../service/Service";
import Navbar from "../navbar/Navbar";
import Footer from "../../containers/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container"></div>

      <Service />
      <Footer />
    </div>
  );
};

export default HomePage;
