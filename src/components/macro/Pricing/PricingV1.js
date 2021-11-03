import React from "react";
import { Link } from 'react-router-dom'

function PricingV1(props) {

    return (
        <>
            <div class="card card_border mb-5">
                <div class="cards__heading">
                    <h3>Pricing Tables -<span> Version 1</span></h3>
                </div>

                <div class="card-body">


                    <section class="w3l-pricing1">
                        <div class="row px-2">
                            <div class="col-md-4 px-2">
                                <div class="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">

                                    <div class="card-header p-0 card-heading">
                                        <h4 class="mb-4">Free</h4>
                                    </div>

                                    <div class="card-body p-0">
                                        <h1 class="card-title pricing-card-title my-price-title">$0<small
                                            class="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul class="list-unstyled list-pricing mt-3 mb-4">
                                            <li>1 Domain</li>
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div class="mt-4">
                                            <Link to={'/signup/'} class="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                                                free</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 px-2">
                                <div class="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                                    <div class="card-header p-0 card-heading">
                                        <h4 class="mb-4">Regular <span class="label label-popular">Popular</span></h4>
                                    </div>
                                    <div class="card-body p-0">
                                        <h1 class="card-title pricing-card-title my-price-title">$49<small
                                            class="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul class="list-unstyled list-pricing mt-3 mb-4">
                                            <li>10 Domain</li>
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div class="mt-4">
                                            <Link to={'/#/'} class="btn btn-lg btn-primary btn-style">Get started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 px-2">
                                <div class="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                                    <div class="card-header p-0 card-heading">
                                        <h4 class="mb-4">Premium</h4>
                                    </div>
                                    <div class="card-body p-0">
                                        <h1 class="card-title pricing-card-title my-price-title">$199<small
                                            class="text-dull">/month</small>
                                        </h1>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <ul class="list-unstyled list-pricing mt-3 mb-4">
                                            <li>30 Domain</li>
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <div class="mt-4">
                                            <Link to={'/#/'} class="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PricingV1