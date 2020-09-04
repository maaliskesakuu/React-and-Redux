import React, { useEffect } from "react";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

import { initNotes } from "./store/reducers/reducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
