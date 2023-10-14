import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";

function App() {
  return (
    <div>
      <Header />
        <Notes title="This is the title" content="This is the content"/>
      <Footer />
    </div>
  );
}

export default App;
