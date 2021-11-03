import React from "react"
import Input from "../../../micro/Forms/Input/Input"

function Forms1(props) {

    return (
        <>
            {/* <!-- forms 1 --> */}
            <div className="card card_border py-2 mb-4">
                <div className="cards__heading">
                    <h3>Forms <span></span></h3>
                </div>
                <div className="card-body">
                    <form action="#" method="post">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="Input__label">Email address</label>
                            <Input name="e-mail" type="email" className="form-control Input-style" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="Input__label">Password</label>
                            <Input type="password" className="form-control Input-style" id="exampleInputPassword1"
                                placeholder="Password" />
                        </div>
                        <div className="form-check check-remember check-me-out">
                            <Input type="checkbox" className="form-check-Input checkbox" id="exampleCheck1" />
                            <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
                    </form>
                </div>
            </div>
            {/* <!-- //forms 1 --> */}
        </>
    )
}

export default Forms1