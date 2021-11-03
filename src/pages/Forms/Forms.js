import React from "react"
import { Link } from 'react-router-dom'
import Forms2 from "../../components/macro/Forms/Forms2/Forms2"
import Forms1 from "../../components/macro/Forms/Forms1/Forms1"


function Forms(props) {

    return (
        <>
            <div className="main-content">

                {/* <!-- content --> */}
                <div className="container-fluid content-top-gap">

                {/* <!-- breadcrumbs --> */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb my-breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/home/'}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Forms</li>
                    </ol>
                </nav>
                {/* <!-- //breadcrumbs -->
                <!-- forms --> */}
                <section className="forms">
                    
                {/* <!-- forms 1 --> */}
                <Forms1/>
                {/* <!-- forms 2 --> */}
                <Forms2/>
                </section>
        
            </div>
            

            </div>
     
        </>
    )
}

export default Forms