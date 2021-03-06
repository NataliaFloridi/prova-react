import React from "react"
// import Button from "../../micro/Button/Button"
import Input from "../../micro/Forms/Input/Input"
import ProfileImg from "../../../assets/images/profileimg.jpg"
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <>
            <div className="header sticky-header">
                <div className="menu-right">
                    <div className="navbar user-panel-top">
                        <div className="search-box">
                            <form action="#search-results.html" method="get">
                                <Input className="search-input" type="text" id="search" placeholder="Search here..." />
                                {/* <button className="search-submit" value=""/><span className="fa fa-search"></span> */}
                            </form>
                        </div>

                        <div className="profile_details">
                            <ul>
                                <li className="dropdown profile_details_drop">
                                    <Link to={'/#'} className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div className="profile_img">
                                            <img className="rounded-circle" alt="" src={ProfileImg} />
                                            <div className="user-active">
                                                <span></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                        <li className="user-info">
                                            <h5 className="user-name">John Deo</h5>
                                            <span className="status ml-2">Available</span>
                                        </li>
                                        <li> <Link to={'/#'}><i className="lnr lnr-user"></i>My Profile</Link> </li>
                                        <li> <Link to={'/#'}><i className="lnr lnr-users"></i>1k Followers</Link> </li>
                                        <li> <Link to={'/#'}><i className="lnr lnr-cog"></i>Setting</Link> </li>
                                        <li> <Link to={'/#'}><i className="lnr lnr-heart"></i>100 Likes</Link> </li>
                                        <li className="logout"> <Link to={'/signup/'}><i className="fa fa-power-off"></i> Logout</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

