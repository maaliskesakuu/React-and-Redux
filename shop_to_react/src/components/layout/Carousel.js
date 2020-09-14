import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div id="content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div id="main-slider" className="owl-carousel owl-theme">
                <div className="item">
                  <img src="img/main-slider1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="img/main-slider2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="img/main-slider3.jpg" alt="" className="img-fluid" />
                </div>
                <div className="item">
                  <img src="img/main-slider4.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
