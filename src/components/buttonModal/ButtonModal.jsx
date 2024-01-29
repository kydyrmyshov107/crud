import React, { useState } from "react";
import Modal from "../modal/Modal";
import Crud from "../crud/Crud";
import css from "./ButtonModal.module.css";

const ButtonModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const url =
    "https://crudcrud.com/api/cd2a1d5517804ff08a946243bb80dbd9/questions";

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const saved = async () => {
    if (value === "" || selectValue === "") {
      alert("write some");
    } else {
      let newData = {
        text: value,
        title: selectValue,
      };
      setSelectValue("");
      postRequest(newData);
      setValue("");
    }
  };
  const postRequest = async (newData) => {
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      get();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const get = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setFetchData(data);
      closeModal();
    } catch (error) {
      console.error("mistake", error);
    }
  };

  const deleteItem = async (_id) => {
    try {
      await fetch(`${url}/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      get();
    } catch (error) {
      console.error("is not working", error);
    }
  };
  const putRequest = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      get();
      openModal()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className={css.button} onClick={openModal}>
        open
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className={css.modal}>
          <input
            type="text"
            placeholder="text "
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option>JavaScript</option>
            <option>Html</option>
            <option>React</option>
            <option>Css</option>
          </select>
          <button className={css.buttonAdd} onClick={() => saved()}>
            add
          </button>
          
                </div>
      </Modal>
      <Crud
      putRequest={putRequest}
      openModal={openModal}
        input={value}
        select={selectValue}
        closeModal={closeModal}
        fetchData={fetchData}
        setFetchData={setFetchData}
        url={url}
      />
    </div>
  );
};

export default ButtonModal;
