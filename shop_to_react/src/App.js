import React from "react";
import Topbar from "./components/layout/Topbar/Topbar";
import Navbar from "./components/layout/Navbar/Navbar";
import Carousel from "./components/layout/Carousel";
import Advantages from './components/layout/Advantages';
import Slideshow from './components/layout/Slideshow';
import Blog from './components/layout/Blog';
import Footer from './components/layout/Footer';
import Copyright from './components/layout/Copyright'

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <Advantages />
      <Slideshow />
      <Blog />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
