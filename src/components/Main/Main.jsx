import { useState } from "react";
import { data } from "../../data";
import TodoElement from "../TodoElement/TodoElement";
import "./Main.css";
import { useEffect } from "react";
import { Skeleton } from "../Skeleton/Skeleton";
import Modal from "../Modal/Modal";
import { useLocalStorage } from "../../utils/useLocalStorage";

export default function Main() {
  const [items, setItems] = useLocalStorage("items", []);
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function toggleElement(id) {
    const updatedItems = items.map((element) => {
      if (element.id === id) {
        return { ...element, checked: !element.checked };
      }
      return element;
    });
    console.log(updatedItems);
    setItems(updatedItems);
  }

  function removeElement(id) {
    const updatedItems = items.filter((element) => element.id !== id);
    console.log(updatedItems);
    if (confirm("Remove this Item?")) {
      setItems(updatedItems);
    }
  }

  function addElement(id, title, text, date) {
    const newElement = {title: title, text: text, checked: false, id: id, date: date};
    setItems([...items, newElement])
  }

  return (
    <main className="main">
      <div className="container main__container">
        <ul className="main__list list-reset">
          {!isLoading ? (
            items.map((element) => (
              <TodoElement
                toggleElement={toggleElement}
                removeElement={removeElement}
                key={element.id}
                {...element}
              ></TodoElement>
            ))
          ) : (
            <>
              <Skeleton></Skeleton> <Skeleton></Skeleton> <Skeleton></Skeleton>
            </>
          )}
        </ul>
        <button onClick={() => setModal(true)} className="main__add btn">+</button>
        <Modal itemsList={items} addElement={addElement} modalControl={setModal} isOpen={isModal} ></Modal>
      </div>

      
    </main>
  );
}
