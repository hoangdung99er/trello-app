import React, { useState, useEffect, useRef } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Column from "@/components/Column/Column";
import { initialData } from "@/actions/initialData";
import { applyDrag } from "@/utils/dragDrop";
import { mapOrder } from "@/utils/sorts";
import "./BoardContent.scss";

// let isDown = false;
// let startX;
// let scrollLeft;

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  const [isToggleOpenNewColumn, setIsToggleOpenNewColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const newColumnInputRef = useRef(null);
  // const slider = document.querySelector(".board-content");

  // drag and drop
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

  // focus input ref
  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus();
      newColumnInputRef.current.select();
    }
  }, [isToggleOpenNewColumn]);

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
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };

    newBoard.columnOrder = newColumns.map((c) => c.id);

    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];

      let currentColumn = newColumns.find((c) => c.id === columnId);

      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);

      currentColumn.cardOrder = currentColumn.cards.map((item) => item.id);

      setColumns(newColumns);
    }
  };

  const toggleOpenNewColumn = () => {
    setIsToggleOpenNewColumn((prev) => !prev);
  };

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus();
      return;
    }

    const newColumnToAdd = {
      id: Math.random().toString(36).substr(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: [],
    };

    let newColumns = [...columns];
    newColumns.push(newColumnToAdd);

    let newBoard = { ...board };

    newBoard.columnOrder = newColumns.map((c) => c.id);

    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);

    setNewColumnTitle("");
    setIsToggleOpenNewColumn(false);
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
            <Column {...column} onCardDrop={onCardDrop} />
          </Draggable>
        ))}
      </Container>
      <div className="add-new-column">
        {!isToggleOpenNewColumn ? (
          <div className="add-new-column-button" onClick={toggleOpenNewColumn}>
            <i className="fa fa-plus icon" />
            Add another column
          </div>
        ) : (
          <div
            className={`enter-new-column ${
              isToggleOpenNewColumn ? "active" : "closed"
            }`}
          >
            <input
              ref={newColumnInputRef}
              type="text"
              placeholder="Enter column title..."
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              onKeyDown={(event) => {
                event.key === "Enter" && addNewColumn();
              }}
            />
            <button
              onClick={addNewColumn}
              className="add-new-title-column-button"
            >
              Add Column
            </button>
            <span
              className="cancel-new-column"
              onClick={() => setIsToggleOpenNewColumn(false)}
            >
              <i className="fa fa-trash icon" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoardContent;
