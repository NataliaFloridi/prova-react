import React from "react";
import { Link } from 'react-router-dom'
import PricingV1 from "../../components/macro/Pricing/PricingV1";
import PricingV2 from "../../components/macro/Pricing/PricingV2";

function Pricing(props) {

    return (
        <>
            <div class="main-content">

                <div class="container-fluid content-top-gap">


                    <nav aria-label="breadcrumb" class="mb-4">
                        <ol class="breadcrumb my-breadcrumb">
                            <li class="breadcrumb-item"><Link to={'/home/'} >Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Pricing Tables</li>
                        </ol>
                    </nav>

                    <section class="pricing">
                        <PricingV1/>
                        <PricingV2/>
                    </section>
                    
                </div>
            </div>
 
        </>
    )
}

export default Pricing