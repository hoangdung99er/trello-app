import React, { useEffect, useState } from "react";
import { Draggable, Container } from "react-smooth-dnd";
import Task from "@/components/Card/Card";
import { mapOrder } from "@/utils/sorts";
import { Dropdown, Form } from "react-bootstrap";
import ConfirmModal from "@/components/Common/ConfirmModal";
import { MODAL_ACTION_CONFIRM } from "@/utils/constansts";
import { selectAllInlineText } from "@/utils/contentEditable";
import "./Column.scss";

function Column(props) {
  const { onCardDrop, onUpdateColumn, column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  useEffect(() => {
    setColumnTitle(column.title);
  }, [column.title]);

  const toggleShowConfirmModal = () => {
    setShowConfirmModal((prev) => !prev);
  };

  const handleTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle,
    };
    onUpdateColumn(newColumn);
  };

  const onConfirmModalAction = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
      // remove column
      const newColumn = {
        ...column,
        _destroy: true,
      };
      onUpdateColumn(newColumn);
    }
    toggleShowConfirmModal();
  };

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          {/* {column.title} */}
          <Form.Control
            className="trello-content-editable"
            type="text"
            value={columnTitle}
            onChange={(e) => setColumnTitle(e.target.value)}
            onBlur={handleTitleBlur}
            size="sm"
            spellCheck="false"
            onClick={selectAllInlineText}
            onKeyDown={(event) => {
              event.key === "Enter" && event.target.blur();
            }}
            onMouseDown={(e) => e.preventDefault()}
          />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown-btn"
              size="sm"
              variant="success"
              id="dropdown-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item>Add Card...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>
                Remove Column...
              </Dropdown.Item>
              <Dropdown.Item>
                Move all cards in this column {"beta"}...
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
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
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
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
      <footer>
        <div className="footer-action">
          <i className="fa fa-plus icon" />
          Add another card
        </div>
      </footer>

      <ConfirmModal
        onAction={onConfirmModalAction}
        title="Remove column"
        content={`Are you sure you want to remove <strong>${column.title}</strong>!<br /> All related cards will also be removed`}
        show={showConfirmModal}
      />
    </div>
  );
}

export default Column;
