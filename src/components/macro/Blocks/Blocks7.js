import React from "react";
import { Link } from 'react-router-dom'
import Template2 from "../../../assets/images/template2.jpg"


function Blocks7(props) {

    return (
        <>
            {/* <!-- //content block 7 --> */}
            <div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
                <div className="card-body py-3 p-0">
                    <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
                    <div className="row cwp23-content">
                        <div className="col-md-6 cwp23-text">
                            <div className="row cwp23-text-cols">
                                <div className="col-md-6 column mt-4">
                                    <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                    <Link to={'/url/'}>Web design</Link>
                                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                </div>
                                <div className="col-md-6 column mt-4">
                                    <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                    <Link to={'/url/'}>Graphic design</Link>
                                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                </div>
                                <div className="col-md-6 column mt-4">
                                    <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                    <Link to={'/url/'}>Web development</Link>
                                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                </div>
                                <div className="col-md-6 column mt-4">
                                    <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                    <Link to={'/url/'}>Webdesign</Link>
                                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-5 cwp23-img">
                            <img src={Template2} className="img-fluid rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Blocks7