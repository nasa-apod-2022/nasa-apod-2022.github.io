import React from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <div className="main flex flex-col items-center font-ChakraPetch text-blue-100 bg-back min-h-screen bg-cover">
      <Header />
      <Content />
    </div>
  );
}

export default App;
