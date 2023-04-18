import React from "react";
import "./index.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";



const AppLayout = () => {
  return (
    <React.Fragment >
    <Header/>
    <Content/>
    <Footer/>
    </React.Fragment>
  );
};


export default AppLayout;
