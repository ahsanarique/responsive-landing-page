import React from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Header from "./Components/Header/Header";
import Contents from "./Components/MainContent/Contents/Contents";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <main>
      <NavigationBar />
      <Header />
      <Contents />
      <Footer />
    </main>
  );
}

export default App;
