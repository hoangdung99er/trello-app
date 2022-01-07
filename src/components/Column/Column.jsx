import React from "react";
import { Draggable, Container } from "react-smooth-dnd";
import Task from "@/components/Card/Card";
import { mapOrder } from "@/utils/sorts";
import "./Column.scss";

function Column(props) {
  const cards = mapOrder(props.cards, props.cardOrder, "id");

  const onCardDrop = (dragResult) => {
    console.log(dragResult);
  };

  return (
    <div className="column">
      <header className="column-drag-handle">{props.title}</header>
      <div className="card-list">
        <Container
          // onDragStart={(e) => console.log("drag started", e)}
          // onDragEnd={(e) => console.log("drag end", e)}
          // onDragEnter={() => {
          //   console.log("drag enter:", column.id);
          // }}
          // onDragLeave={() => {
          //   console.log("drag leave:", column.id);
          // }}
          // onDropReady={(p) => console.log("Drop ready: ", p)}
          groupName="col"
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Task {...card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;
