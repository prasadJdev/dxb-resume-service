import React from "react";

import CallAndChat from "./components/CallAndChat";
import Navbar from "./components/Navbar";

function Default() {
  return (
    <header className="bg-primary">
      <CallAndChat />
      <Navbar />
    </header>
  );
}

export default Default;
