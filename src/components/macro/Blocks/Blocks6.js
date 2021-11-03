import React from "react";
import { Link } from 'react-router-dom'


function Blocks6(props) {

    return (
        <>
          {/* <!-- //content block 6 --> */}
            <div className="card card_border p-lg-5 p-3 mb-4">
                        <div className="card-body py-3 p-0">
                            <h3 className="block__title mb-lg-4">Content Block Features</h3>
                            <div className="row feature-3 text-center">
                                <div className="col-md-4 three-grids-columns mt-5">
                                    <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                                    <Link to={'/#'}>

                                        <h4>Web Design</h4>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                                    <Link to={'/#'}className="actionbg">Read More</Link>
                                </div>
                                <div className="col-md-4 three-grids-columns mt-5">
                                    <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                                    <Link to={'/#'}>

                                        <h4>Graphic Design</h4>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                    <Link to={'/#'} className="actionbg">Read More</Link>
                                </div>
                                <div className="col-md-4 three-grids-columns mt-5">
                                    <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                                    <Link to={'/#'}>

                                        <h4>Web Development</h4>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                                    <Link to={'/#'} className="actionbg">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  

        </>
    )
}

export default Blocks6