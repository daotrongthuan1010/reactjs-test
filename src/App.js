import React from "react";
import "./index.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Show from "./component/Show";



const AppLayout = () => {
  return (
    <React.Fragment >
    <Header/>
    <Show/>
    <Footer/>
    </React.Fragment>
  );
};


export default AppLayout;
