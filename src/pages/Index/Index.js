import React from "react";
import "./Index.css"
import Header from "../../components/template/Header/Header";
import Footer from "../../components/template/Footer/Footer";
import Sidebar from "../../components/template/Sidebar/Sidebar";

function Index(props){

    return(
        <>
            <div> Index</div>
            <Sidebar/>
            <Header/>
            <Footer/>
        </>
    )
}

export default Index