import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footers";

function App() {
  return (
    <div className="main flex flex-col items-center font-ChakraPetch text-blue-100 bg-back min-h-screen bg-cover">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
