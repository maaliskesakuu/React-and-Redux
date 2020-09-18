import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Slideshow extends Component {
  render() {
    return (
      <div id="hot">
        <div className="box py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="mb-0">Hot this week</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-slider owl-carousel owl-theme">
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product1.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product1_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product1.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">
                      Fur coat with very but very very long name
                    </Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
                <div className="ribbon sale">
                  <div className="theribbon">SALE</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon new">
                  <div className="theribbon">NEW</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon gift">
                  <div className="theribbon">GIFT</div>
                  <div className="ribbon-background"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product2_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product2.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">White Blouse Armani</Link>
                  </h3>
                  <p className="price">
                    <del>$280</del>$143.00
                  </p>
                </div>
                <div className="ribbon sale">
                  <div className="theribbon">SALE</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon new">
                  <div className="theribbon">NEW</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon gift">
                  <div className="theribbon">GIFT</div>
                  <div className="ribbon-background"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product3_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product3.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">Black Blouse Versace</Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product3_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product3.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">Black Blouse Versace</Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product2_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product2.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">White Blouse Versace</Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
                <div className="ribbon new">
                  <div className="theribbon">NEW</div>
                  <div className="ribbon-background"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product1.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product1_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product1.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">Fur coat</Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
                <div className="ribbon gift">
                  <div className="theribbon">GIFT</div>
                  <div className="ribbon-background"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product2.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product2_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product2.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">White Blouse Armani</Link>
                  </h3>
                  <p className="price">
                    <del>$280</del>$143.00
                  </p>
                </div>
                <div className="ribbon sale">
                  <div className="theribbon">SALE</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon new">
                  <div className="theribbon">NEW</div>
                  <div className="ribbon-background"></div>
                </div>
                <div className="ribbon gift">
                  <div className="theribbon">GIFT</div>
                  <div className="ribbon-background"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      <Link to="/detailpage">
                        <img src="img/product3.jpg" alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="back">
                      <Link to="/detailpage">
                        <img
                          src="img/product3_2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/detailpage" className="invisible">
                  <img src="img/product3.jpg" alt="" className="img-fluid" />
                </Link>
                <div className="text">
                  <h3>
                    <Link to="/detailpage">Black Blouse Versace</Link>
                  </h3>
                  <p className="price">
                    <del></del>$143.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
