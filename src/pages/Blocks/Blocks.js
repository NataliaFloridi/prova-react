import React from "react";
import { Link } from 'react-router-dom'
import Blocks1 from "../../components/macro/Blocks/Block1";
import Blocks2 from "../../components/macro/Blocks/Block2";
import Blocks6 from "../../components/macro/Blocks/Blocks6";
import Blocks7 from "../../components/macro/Blocks/Blocks7";



function Blocks(props) {

    return (
        <>
            <div className="main-content">
                <div className="container-fluid content-top-gap">
{/*                     <!-- breadcrumbs --> */}
                    <nav aria-label="breadcrumb" className="mb-4">
                        <ol className="breadcrumb my-breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/home'}>Home</Link></li>
                            <li className="breadcrumb-item"><Link to={'/#'}>Elements</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Content Blocks</li>
                        </ol>
                    </nav>
                    {/* <!-- //breadcrumbs --> */}
{/* 
                    <!-- card heading --> */}
                    <div className="cards__heading">
                        <h3>Content Blocks</h3>
                    </div>
                    {/* <!-- //card heading --> */}

                    {/* <!-- content block 1--> */}
                    <Blocks1/>

                    {/* <!-- content block  2--> */}
                    <Blocks2/>

                    {/* <!-- content block  6 --> */}
                    <Blocks6/>

                    {/* <!-- content block  7 --> */}
                    <Blocks7/>
                </div>
                </div>
            </>
            )
}

            export default Blocks