import React from "react";

function Sidebar(props) {

    return (

        <>
            <div classNameName="sidebar-menu sticky-sidebar-menu">
                <div className="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>
                <div className="logo">
                    <a href="index.html">
                        {/* <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" /> */}
                    </a>
                </div>

                <div className="logo-icon text-center">
                    <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"/> </a>
                </div>

                <div className="sidebar-menu-inner">
                    <ul className="nav nav-pills nav-stacked custom-nav">
                        <li><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
                        </li>
                        <li><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                </div>    
            </div>        
        </>
    )
}
    export default Sidebar