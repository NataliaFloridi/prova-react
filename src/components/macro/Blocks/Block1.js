import React from "react";
import Template2 from "../../assets/images/template2.jpg"
import { Link } from 'react-router-dom'


function Blocks1(props) {

    return (
        <>
        {/* <!-- //content block 1--> */}
            <div className="card card_border p-lg-5 p-3 mb-4">
                <div className="card-body py-3 p-0">
                    <div className="row">
                        <div className="col-lg-6 align-self pr-lg-4">
                            <h3 className="block__title mb-lg-4">About Content Block</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                neque sunt labore veritatis. </p>
                            <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                                neque sunt
                                praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                                praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                            <Link to={'/read/'} className="btn btn-style btn-primary"> Read More</Link>
                        </div>
                        <div className="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                            <img src={Template2} alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Blocks1
