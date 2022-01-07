import React, { useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Column from "@/components/Column/Column";
import { initialData } from "@/actions/initialData";
import { mapOrder } from "@/utils/sorts";
import "./BoardContent.scss";

// let isDown = false;
// let startX;
// let scrollLeft;

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  // const slider = document.querySelector(".board-content");

  useEffect(() => {
    const fetchBoardData = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (fetchBoardData) setBoard(fetchBoardData);

    //sort column

    setColumns(
      mapOrder(fetchBoardData.columns, fetchBoardData.columnOrder, "id")
    );
  }, []);

  if (!board) {
    return <div className="not-found">Board not found!</div>;
  }

  // const handleMouseDown = (e) => {
  //   isDown = true;
  //   slider.classList.add("active");
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // };

  // const handleMouseLeave = () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // };

  // const handleMouseUp = () => {
  //   isDown = false;
  //   slider.classList.remove("active");
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();

  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   slider.scrollLeft = scrollLeft - walk;
  // };

  const onColumnDrop = (dropResult) => {
    console.log(dropResult);
  };

  return (
    <div
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // onMouseUp={handleMouseUp}
      className="board-content"
    >
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
        getChildPayload={(index) => columns[index]}
      >
        {columns?.map((column, index) => (
          <Draggable key={index}>
            <Column {...column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}

export default BoardContent;
