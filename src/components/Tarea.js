import React, { useState } from "react";
import "../App.css";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span className="lista-tarea">{props.tarea}</span>
          <button className="btn-editar" onClick={editar}>Editar</button>
          <button className="btn-borrar" onClick={borrarTarea}>Borrar</button>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input className="input-editar" value={editText} onChange={manejarEdit} />{" "}
          <button className="btn-guardar">Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;
