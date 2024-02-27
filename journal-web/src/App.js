import React, { useState } from "react";
import OpenClassPage from "./components/OpenClass";
import Header from "./components/Header"; // Make sure the path to the Header component is correct

function App() {
  return (
    <div className="App">
        <Header />
        {/* Other components or content */}
        <OpenClassPage /> {/* Here you use your imported component */}
    </div>
  );
}
export default App;
