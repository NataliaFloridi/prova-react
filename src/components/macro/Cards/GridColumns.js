import React from "react";
import Cart from "../../../assets/images/cart.jpg"
import Template2 from "../../../assets/images/template2.jpg"
import Dashboard from "../../../assets/images/dashboard.jpg"
import Desk from "../../../assets/images/desk.jpg"

function GridColumns(props) {
    return (
        <>
         {/* <!-- /Grid Columns --> */}
            <div class="card card_border mb-5">
                <div class="cards__heading">
                    <h3>Grid Columns</h3>
                </div>
                <div class="card-body">
                    <div class="row row-cols-1 row-cols-md-2">
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Template2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Desk} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Cart} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                                <img src={Dashboard} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                        additional
                                        content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </>
    )
}

export default GridColumns