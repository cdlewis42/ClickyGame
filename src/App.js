import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card src = "https://i.pinimg.com/originals/ba/47/1b/ba471ba9e1a6af44147a63af95ca6f20.png"></Card>
      <Card src = "https://vignette.wikia.nocookie.net/videogames-fanon/images/e/ed/Coco_-_New_Leaf.png/revision/latest/scale-to-width-down/340?cb=20130813003417"></Card>
    </div>
  );
}

export default App;
