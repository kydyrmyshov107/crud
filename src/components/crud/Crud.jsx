import React, { useState, useEffect } from "react";
import CrudList from "../crudList/CrudList";
import ButtonModal from "../buttonModal/ButtonModal";

const Crud = ({ input, select, openModal, fetchData, setFetchData, url }) => {
  useEffect(() => {
    get();
  }, [input, select]);

  const saved = async () => {
    let newData = {
      text: input,
      title: select,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setFetchData([...fetchData, result]);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const get = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setFetchData(data);
    } catch (error) {
      console.error("mistake", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
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
        body: JSON.stringify({
          title: "great job",
        }),
      });
      get();
      // openModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CrudList
        fetchData={fetchData}
        putRequest={putRequest}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Crud;
