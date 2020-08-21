import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Notes to myself</h1>
          <p>
            The number of notes is <span>{this.props.list.length}</span> at the moment
          </p>
        </header>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.notes,
  };
};

export default connect(mapStateToProps)(Header);
