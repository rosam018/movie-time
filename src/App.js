import React from "react";
import { StoreProvider } from "./context/store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Navigation />
      </Router>
    </StoreProvider>
  );
}

export default App;
