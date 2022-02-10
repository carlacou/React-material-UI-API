import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/Products/ProductContainer";
import DataGridMui from "./playground/DataGridMui";
import Footer from "./components/Footer/footer"


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductContainer />
      <DataGridMui />
      <Footer />
    </>
  );
}

export default App;
