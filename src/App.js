import React from "react";
import { StoreProvider } from "./context/store";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Header />
        <Navigation />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
