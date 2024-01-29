import React, { useState } from "react";
import { createPortal } from "react-dom";
import ButtonModal from "../buttonModal/ButtonModal";
import css from "./Rand.module.css";
const data = [
  {
    id: 1,
    text: "В чем разница между export default и export в JavaScript ?",
  },
  {
    id: 2,
    text: "Как указать цвета для границ таблицы?",
  },
  {
    id: 3,
    text: "Адрес какой веб-страницы обычно считается адресом сайта?",
  },
  {
    id: 4,
    text: "Что такое npm и каковы его ключевые функции",
  },
  {
    id: 5,
    text: "Вы, когда-либо, использовали Grid систему, и, если да, то какую технологию для упрощения разметки HTML-страниц вы предпочитаете",
  },
  {
    id: 6,
    text: "Что вы можете рассказать о стилизации SVG?",
  },
  {
    id: 7,
    text: "Что делает свойство *{box-sizing: border-box;}? Какие его преимущества ?",
  },
  {
    id: 8,
    text: "Какие моменты по написанию эффективного CSS вы бы выделили?",
  },
];

const Rand = () => {
  const [random, setRandom] = useState(data);
  const [randomTwo, setRandomTwo] = useState([]);
  const [modal, setModal] = useState(false);
  const isOpen = () => setModal(true);
  const isClose = () => setModal(false);
  const dataRandom = () => {
    const randQuestion = Math.floor(Math.random() * random.length);
    const randomElement = random[randQuestion];
    setRandomTwo([randomElement]);
  };

  return (
    <>
      <div className={css.aside}>
        <div>
          <button className={css.button} onClick={isOpen}>
            Random
          </button>
        </div>
        <div>
          {modal &&
            createPortal(
              <div className={css.content}>
                {randomTwo.map((item) => {
                  return (
                    <div key={item.id}>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
                <button className={css.buttonTwo} onClick={dataRandom}>
                  random questions
                </button>
              </div>,
              document.getElementById("portal-question")
            )}
        </div>
      </div>
    </>
  );
};

export default Rand;
