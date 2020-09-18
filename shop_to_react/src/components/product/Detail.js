import React, { Component } from "react";

class Detail extends Component {
  render() {
    return (
      <div>
        <div className="card sidebar-menu mb-4">
          <div className="card-header">
            <h3 className="h4 card-title">Categories</h3>
          </div>
          <div className="card-body">
            <ul className="nav nav-pills flex-column category-menu">
              <li>
                <a href="category.html" className="nav-link">
                  Men <span className="badge badge-secondary">42</span>
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="category.html" className="nav-link">
                      T-shirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Pants
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category.html" className="nav-link active">
                  Ladies <span className="badge badge-light">123</span>
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="category.html" className="nav-link">
                      T-shirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Skirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Pants
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category.html" className="nav-link">
                  Kids <span className="badge badge-secondary">11</span>
                </a>
                <ul className="list-unstyled">
                  <li>
                    <a href="category.html" className="nav-link">
                      T-shirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Skirts
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Pants
                    </a>
                  </li>
                  <li>
                    <a href="category.html" className="nav-link">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="card sidebar-menu mb-4">
          <div className="card-header">
            <h3 className="h4 card-title">
              Brands{" "}
              <a href="#" className="btn btn-sm btn-danger pull-right">
                <i className="fa fa-times-circle"></i> Clear
              </a>
            </h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Armani (10)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Versace (12)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Carlo Bruni (15)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Jack Honey (14)
                  </label>
                </div>
              </div>
              <button className="btn btn-default btn-sm btn-primary">
                <i className="fa fa-pencil"></i> Apply
              </button>
            </form>
          </div>
        </div>
        <div className="card sidebar-menu mb-4">
          <div className="card-header">
            <h3 className="h4 card-title">
              Colours{" "}
              <a href="#" className="btn btn-sm btn-danger pull-right">
                <i className="fa fa-times-circle"></i> Clear
              </a>
            </h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="colour white"></span> White (14)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="colour blue"></span> Blue (10)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="colour green"></span> Green (20)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="colour yellow"></span> Yellow (13)
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="colour red"></span> Red (10)
                  </label>
                </div>
              </div>
              <button className="btn btn-default btn-sm btn-primary">
                <i className="fa fa-pencil"></i> Apply
              </button>
            </form>
          </div>
        </div>
        <div className="banner">
          <a href="#">
            <img src="img/banner.jpg" alt="sales 2014" className="img-fluid" />
          </a>
        </div>
        <div className="col-lg-9 order-1 order-lg-2">
          <div id="productMain" className="row">
            <div className="col-md-6">
              <div data-slider-id="1" className="owl-carousel shop-detail-carousel">
                <div className="item">
                  {" "}
                  <img src="img/detailbig1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="item">
                  {" "}
                  <img src="img/detailbig2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="item">
                  {" "}
                  <img src="img/detailbig3.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="ribbon sale">
                <div className="theribbon">SALE</div>
                <div className="ribbon-background"></div>
              </div>
              <div className="ribbon new">
                <div className="theribbon">NEW</div>
                <div className="ribbon-background"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <h1 className="text-center">White Blouse Armani</h1>
                <p className="goToDescription">
                  <a href="#details" className="scroll-to">
                    Scroll to product details, material &amp; care and sizing
                  </a>
                </p>
                <p className="price">$124.00</p>
                <p className="text-center buttons">
                  <a href="basket.html" className="btn btn-primary">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="basket.html" className="btn btn-outline-primary">
                    <i className="fa fa-heart"></i> Add to wishlist
                  </a>
                </p>
              </div>
              <div data-slider-id="1" className="owl-thumbs">
                <button className="owl-thumb-item">
                  <img src="img/detailsquare.jpg" alt="" className="img-fluid" />
                </button>
                <button className="owl-thumb-item">
                  <img src="img/detailsquare2.jpg" alt="" className="img-fluid" />
                </button>
                <button className="owl-thumb-item">
                  <img src="img/detailsquare3.jpg" alt="" className="img-fluid" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="details" className="box">
          <p></p>
          <h4>Product details</h4>
          <p>
            White lace top, woven, has a round neck, short sleeves, has knitted
            lining attached
          </p>
          <h4>Material &amp; care</h4>
          <ul>
            <li>Polyester</li>
            <li>Machine wash</li>
          </ul>
          <h4>Size &amp; Fit</h4>
          <ul>
            <li>Regular fit</li>
            <li>The model (height 5'8" and chest 33") is wearing a size S</li>
          </ul>
          <blockquote>
            <p>
              <em>
                Define style this season with Armani's new range of trendy tops,
                crafted with intricate details. Create a chic statement look by
                teaming this lace number with skinny jeans and pumps.
              </em>
            </p>
          </blockquote>
          <hr />
          <div className="social">
            <h4>Show it to your friends</h4>
            <p>
              <a href="#" className="external facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="external gplus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="external twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="email">
                <i className="fa fa-envelope"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="row same-height-row">
          <div className="col-md-3 col-sm-6">
            <div className="box same-height">
              <h3>You may also like these products</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product2_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product2.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product1.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product1_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product1.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product3.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product3_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product3.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row same-height-row">
          <div className="col-md-3 col-sm-6">
            <div className="box same-height">
              <h3>Products viewed recently</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product2_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product2.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product1.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product1_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product1.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product same-height">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <a href="detail.html">
                      <img src="img/product3.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="back">
                    <a href="detail.html">
                      <img src="img/product3_2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
              <a href="detail.html" className="invisible">
                <img src="img/product3.jpg" alt="" className="img-fluid" />
              </a>
              <div className="text">
                <h3>Fur coat</h3>
                <p className="price">$143</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
