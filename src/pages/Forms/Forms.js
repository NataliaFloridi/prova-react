import React from "react"
import Input from "../../components/micro/Forms/Input/Input"

function Forms(props) {

    return (
        <>
            <div className="main-content">

                {/* <!-- content --> */}
                <div className="container-fluid content-top-gap">

                {/* <!-- breadcrumbs --> */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb my-breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Forms</li>
                    </ol>
                </nav>
                {/* <!-- //breadcrumbs -->
                <!-- forms --> */}
                <section className="forms">
                    {/* <!-- forms 1 --> */}
                    <div className="card card_border py-2 mb-4">
                    <div className="cards__heading">
                        <h3>Forms <span></span></h3>
                    </div>
                    <div className="card-body">
                        <form action="#" method="post">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="Input__label">Email address</label>
                            <Input type="email" className="form-control Input-style" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="Input__label">Password</label>
                            <Input type="password" className="form-control Input-style" id="exampleInputPassword1"
                            placeholder="Password"/>
                        </div>
                        <div className="form-check check-remember check-me-out">
                            <Input type="checkbox" className="form-check-Input checkbox" id="exampleCheck1"/>
                            <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                        </form>
                    </div>
                    </div>
                    {/* <!-- //forms 1 --> */}

                    {/* <!-- forms 2 --> */}
                    <div className="card card_border py-2 mb-4">
                    <div className="card-body">
                        <form action="#" method="post">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="InputEmail4" className="Input__label">Email</label>
                            <Input type="email" className="form-control Input-style" id="InputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="InputPassword4" className="Input__label">Password</label>
                            <Input type="password" className="form-control Input-style" id="InputPassword4" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="InputAddress" className="Input__label">Address</label>
                            <Input type="text" className="form-control Input-style" id="InputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label for="InputAddress2" className="Input__label">Address 2</label>
                            <Input type="text" className="form-control Input-style" id="InputAddress2"
                            placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="InputCity" className="Input__label">City</label>
                            <Input type="text" className="form-control Input-style" id="InputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                            <label for="InputState" className="Input__label">State</label>
                            <select id="InputState" className="form-control Input-style">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                            <label for="InputZip" className="Input__label">Zip</label>
                            <Input type="text" className="form-control Input-style" id="InputZip"/>
                            </div>
                        </div>
                        <div className="form-check check-remember check-me-out">
                            <Input className="form-check-Input checkbox" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label checkmark" for="gridCheck">
                            Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
                        </form>
                    </div>
                    </div>
                    {/* <!-- //forms 2 --> */}



                </section>
        
              
        

                </div>
            

                </div>
     
        </>
    )
}

export default Forms