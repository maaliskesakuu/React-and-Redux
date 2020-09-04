import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../actions";

const NewNote = () => {
  const notes = useSelector(state => state);
  const dispatch = useDispatch();

  let i = notes.length;

  const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    id: i++,
    text: text,
  });

  return (
    <div>
      <h2>Enter your notes here: </h2>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch(addTodo(event.target.notes.value));
          event.target.notes.value = "";
        }}
      >
        <label htmlFor="notes">Note </label>
        <input id="notes" name="notes" type="text" />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default NewNote;
