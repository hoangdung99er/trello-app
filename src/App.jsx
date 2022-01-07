import React from "react";
import "./App.scss";

// Custom Components
import AppBar from "@/components/AppBar/Appbar";
import BoardBar from "@/components/BoardBar/BoardBar";
import BoardContent from "@/components/BoardContent/BoardContent";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  return (
    <div className="trello-container">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
