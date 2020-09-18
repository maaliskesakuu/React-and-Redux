import React, { Component } from "react";
import Detail from "../product/Detail";

class Detailpage extends Component {
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Ladies</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Tops</a>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    White Blouse Armani
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <Detail />
        </div>
      </div>
    );
  }
}

export default Detailpage;
