import React from "react";
import Header from "../../components/template/Header/Header";
import Footer from "../../components/template/Footer/Footer";
import Sidebar from "../../components/template/Sidebar/Sidebar";

function Block(props){

    return(
        <>
            <div> Blocks</div>
            <Sidebar/>
            <Header/>
            <Footer/>
        </>
    )
}

export default Block