import React from "react";
import { Body } from "./components";
import { Providers } from "./store/provider";

function App() {
  return (
    <Providers>
      <div className="h-screen bg-black text-white">
        <Body />
      </div>
    </Providers>
  );
}

export default App;
