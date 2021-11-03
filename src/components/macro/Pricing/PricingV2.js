import React from "react";
import { Link } from 'react-router-dom'

function PricingV2(props) {

    return (
        <>
            <div class="pricing-version-2">
                <div class="card card_border mb-5">
                    <div class="cards__heading">
                        <h3>Pricing Tables -<span> Version 2</span></h3>
                    </div>
                    <div class="card-body">
                        <div class="row px-2">

                            <div class="col-lg-4 col-md-6 px-2 mb-4">
                                <div class="card text-center card__hover">
                                    <div class="card-header">
                                        <h3 class="display-4"><span class="currency">$</span>19<span class="period">/month</span></h3>
                                    </div>
                                    <div class="card-block">
                                        <h4 class="card-title">
                                            Basic Plan
                                        </h4>
                                        <ul class="list-group">
                                            <li class="list-group-item">1 Domain</li>
                                            <li class="list-group-item">Ultimate Features</li>
                                            <li class="list-group-item">Responsive Ready</li>
                                            <li class="list-group-item">Editor Ready Builder</li>
                                            <li class="list-group-item">Limited UI Blocks</li>
                                            <li class="list-group-item">24/7 Support System</li>
                                        </ul>
                                        <Link to={'/#/'} class="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 px-2 mb-4">
                                <div class="card text-center card__hover">
                                    <div class="card-header">
                                        <h3 class="display-4"><span class="currency">$</span>29<span class="period">/month</span></h3>
                                    </div>
                                    <div class="card-block">
                                        <h4 class="card-title">
                                            Regular Plan
                                        </h4>
                                        <ul class="list-group">
                                            <li class="list-group-item">10 Domain</li>
                                            <li class="list-group-item">Ultimate Features</li>
                                            <li class="list-group-item">Responsive Ready</li>
                                            <li class="list-group-item">Editor Ready Builder</li>
                                            <li class="list-group-item">Unlimited UI Blocks</li>
                                            <li class="list-group-item">24/7 Support System</li>
                                        </ul>
                                        <Link to={'/#/'} class="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 px-2 mb-4">
                                <div class="card text-center card__hover">
                                    <div class="card-header">
                                        <h3 class="display-4"><span class="currency">$</span>39<span class="period">/month</span></h3>
                                    </div>
                                    <div class="card-block">
                                        <h4 class="card-title">
                                            Premium Plan
                                        </h4>
                                        <ul class="list-group">
                                            <li class="list-group-item">15 Domain</li>
                                            <li class="list-group-item">Ultimate Features</li>
                                            <li class="list-group-item">Responsive Ready</li>
                                            <li class="list-group-item">Editor Ready Builder</li>
                                            <li class="list-group-item">Unlimited UI Blocks</li>
                                            <li class="list-group-item">24/7 Support System</li>
                                        </ul>
                                        <Link to={'/#/'} class="btn btn-style btn-primary mt-4">Choose Plan</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingV2