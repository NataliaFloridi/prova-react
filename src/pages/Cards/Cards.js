import React from "react";
import { Link } from 'react-router-dom'
import GridColumns from "./GridColumns/GridColumns";
import CardColumns from "./CardColumns/CardColumns";


function Cards(props) {

    return (
        <>
            <div class="main-content">
                {/* <!-- content --> */}
                <div class="container-fluid content-top-gap">
                    {/* <!-- breadcrumbs --> */}
                    <nav aria-label="breadcrumb" class="mb-4">
                        <ol class="breadcrumb my-breadcrumb">
                            <li class="breadcrumb-item"><Link to={'/home/'}>Home</Link></li>
                            <li class="breadcrumb-item"><Link to={'/#/'}>Elements</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Cards</li>
                        </ol>
                    </nav>
                    {/* <!-- //breadcrumbs -->
                     <!-- cards --> */}
                    <section class="template-cards">
                        {/* <!-- /Card Columns --> */}
                        <CardColumns />
                        {/* <!-- Grid Columns -->  */}
                        <GridColumns />
                    </section>
                    {/* <!-- //cards --> */}
                </div>
    
            </div>

        </>
    )
}

export default Cards