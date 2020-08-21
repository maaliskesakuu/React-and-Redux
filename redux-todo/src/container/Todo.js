import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../action";

class Todo extends Component {
  render() {
    return (
      <>
        <main>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.newNote(e.target.note.value);
              e.target.note.value = "";
            }}
          >
            <label htmlFor="note">Note</label>
            <input id="note" name="note"></input>
            <button>submit</button>
          </form>
          <ul>
            {this.props.list.map(item => (
              <li key={item.id} onClick={() => this.props.removeNote(item.id)}>
                {item.text}
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newNote: content => dispatch({ type: actionType.NEW_NOTE, data: content }),
    removeNote: id => dispatch({ type: actionType.REMOVE_NOTE, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
