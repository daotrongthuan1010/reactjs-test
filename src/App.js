import React from "react";
import "./index.css";
import Header from "./component/Header";
import Login from "./component/Content";
import Footer from "./component/Footer";



const AppLayout = () => {
  return (
    <React.Fragment style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/abc.jpg)` }} >
    <Header/>
    <Login/>
    <Footer/>
    </React.Fragment>
  );
};


export default AppLayout;
