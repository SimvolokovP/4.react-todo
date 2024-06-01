import { useState } from "react";
import "./TodoElement.css";

export default function TodoElement({
  checked,
  title,
  id,
  text,
  date,
  toggleElement,
  removeElement,
}) {
  return (
    <li className={checked ? "todo-element checked" : "todo-element"}>
      <div className="todo-element__header">
        <h3 className="todo-element__title">{title}</h3>
        <button
          onClick={() => removeElement(id)}
          className="todo-element__remove btn"
        >
          remove
        </button>
      </div>
      <div className="todo-element__text">{text}</div>
      <div className="todo-element__actions">
        <div>{date}</div>
        <button
          className="todo-element__toggle"
          onClick={() => {
            toggleElement(id);
          }}
        >
          toggle
        </button>
      </div>
    </li>
  );
}
