import React from 'react';

const NewNote = () => {
  return (
    <div>
      <h2>Enter your notes here: </h2>
      <form>
        <label htmlFor="notes"></label>
        <input id="notes" name="notes" type="text" />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
}

export default NewNote;
