import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <>
        <div id="search" className="collapse">
          <div className="container">
            <form role="search" className="ml-auto">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
