import React from 'react';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App max-w-[500px] mx-auto my-0">
      <h1 className="text-center mb-4">Github Finder</h1>
      <Outlet/>
    </div>
  );
}

export default App;
