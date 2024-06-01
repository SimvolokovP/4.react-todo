import { useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, modalControl, addElement, itemsList }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function clearInputs() {
    setText('');
    setTitle('');
  }

  return (
    <div className={isOpen ? "modal__container open" : "modal__container"}>
      <div className="modal">
        <button onClick={() => modalControl(false)} className="modal__close">
          X
        </button>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newId = itemsList.length > 0 ? itemsList[itemsList.length - 1].id + 1 : 0;
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()}.${
              currentDate.getMonth() + 1
            }.${currentDate.getFullYear()}`;
            addElement(newId, title, text, formattedDate);
            clearInputs();
          }}
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <input
            value={title}
            onChange={(value) => setTitle(value.target.value)}
            placeholder="title"
            type="text"
          />
          <textarea
            value={text}
            onChange={(value) => setText(value.target.value)}
            className="modal__text-area"
            placeholder="text"
          ></textarea>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
