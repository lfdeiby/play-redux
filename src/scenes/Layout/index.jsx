import React from 'react';
import { connect } from 'react-redux';
import Planes from '../Planes';
import $ from 'jquery';


class Layout extends React.Component{

    componentDidMount(){
        $("#h3").html("HOLA MUNDO DESDE JQUERY");
    }

    render(){
        return(
            <div className="container body">
                <div className="main_container">
                    {/*<!-- SECCION LATERAL -->*/}
                    <div className="col-md-3 left_col menu_fixed">
                        SECCION 1
                    </div>

                    {/*<!-- top navigation -->*/}
                    <div className="top_nav">
                        <div className="nav_menu">
                            <nav>
                                <div className="nav toggle">
                                    <a id="menu_toggle">
                                        <i className="icon-bars"></i>
                                    </a>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    {/* Datos personales */}
                                    <li className="">
                                        <a href="javascript:;"
                                           className="user-profile dropdown-toggle"
                                           data-toggle="dropdown"
                                           aria-expanded="true">
                                                <img src="https://colorlib.com/polygon/gentelella/images/img.jpg" alt="" />
                                                John Doe &nbsp;
                                                <span className="icon-angle-down"></span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-usermenu pull-right">
                                            <li><a href="javascript:;"> Profile</a></li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span className="badge bg-red pull-right">50%</span>
                                                    <span>Settings</span>
                                                </a>
                                            </li>
                                            <li><a href="javascript:;">Help</a></li>
                                            <li><a href="login.html">
                                                <i className="icon-sign-out pull-right"></i>
                                                Log Out</a>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Mensajes */}
                                    <li role="presentation" className="dropdown ">
                                        <a href="javascript:;"
                                           className="dropdown-toggle info-number"
                                           data-toggle="dropdown" aria-expanded="false">
                                            <i className="icon-envelope-o"></i>
                                            <span className="badge bg-green">6</span>
                                        </a>
                                        <ul id="menu1"
                                            className="dropdown-menu list-unstyled msg_list"
                                            role="menu">
                                            <li>
                                                <a>
                                                    <span className="image">
                                                        <img src="https://colorlib.com/polygon/gentelella/images/img.jpg" alt="Profile Image" />
                                                    </span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span className="image">
                                                        <img src="https://colorlib.com/polygon/gentelella/images/img.jpg" alt="Profile Image" />
                                                    </span>
                                                    <span>
                                                        <span>John Smith</span>
                                                        <span className="time">3 mins ago</span>
                                                    </span>
                                                    <span className="message">
                                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="text-center">
                                                    <a>
                                                        <strong>See All Alerts</strong> &nbsp;
                                                        <i className="icon-angle-right" style={ {paddingTop:'2px' }}></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/*<!-- page content -->*/}
                    <div className="right_col" role="main">
                        <Planes/>
                    </div>

                    {/*<!-- footer content -->*/}
                    <footer>
                    </footer>

                </div>
            </div>
        );
    }
}

export default connect()(Layout);