import React from "react";

function Sidebar(props) {

    return (

        <>
        <body class="sidebar-menu-collapsed">
            <div className="sidebar-menu sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div className="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>

                {/* <!-- if logo is image enable this -->
                <!-- image logo -- */}
                <div className="logo">
                    <a href="index.html">
                        {/* <img src="image-path" alt="Your logo" title="Your logo" class NclassName="img-fluid" style="height:35px;" /> */}
                    </a>
                </div>
                {/* <!-- //image logo --> */}

                <div className="logo-icon text-center">
                    {/* <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"> </a> */}
                </div>
                {/* <!-- //logo end --> */}

                <div className="sidebar-menu-inner">

                    {/* <!-- sidebar nav start --> */}
                    <ul class NclassName="nav nav-pills nav-stacked custom-nav">
                        <li><a href="index.html"><i class NclassName="fa fa-tachometer"></i><span> Dashboard</span></a>
                        </li>
                        <li><a href="cards.html"><i class NclassName="fa fa-cogs"></i> <span>Default cards</span></a></li>
                        <li><a href="pricing.html"><i clasNclassName="fa fa-table"></i> <span>Pricing tables</span></a></li>
                        <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="forms.html"><i class NclassName="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                    {/* <!-- //sidebar nav end --> */}
                </div>     
            </div>      
            </body>   
        </>

     )
}
    export default Sidebar