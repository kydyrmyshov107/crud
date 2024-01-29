import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import css from "./CrudList.module.css";

const CrudList = ({ fetchData, deleteItem, putRequest }) => {
  useEffect(() => {}, [fetchData]);

  return (
    <div className={css.items}>
      {fetchData?.map((el) => (
        <div className={css.header} key={el.id}>
          <h3>{el.text}</h3>
          <h4>{el.title}</h4>
          <button className={css.button}
            onClick={() => {
              deleteItem(el._id);
            }}
          >
            delete
          </button>
          <button className={css.button}
            onClick={() => {
              putRequest(el._id);
            }}
          >
            put
          </button>
        </div>
      ))}
    </div>
  );
};

export default CrudList;
