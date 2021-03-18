import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class NavBar extends React.Component {
    render(){
        return(
          <>
                  <header id="site_header" className="header mobile-menu-hide">
                          <div className="header-content clearfix">
                            <div className="my-photo">
                              <img src='images/photo.jpg' alt="Profile Pic"/>
                            </div>

                            <div className="site-title-block">
                              <div className="site-title">Alex Smith</div>
                            </div>

                           

                            <div className="site-nav">


                              <ul id="nav" className="site-main-menu">
                              
                                <li>
                                  <Link  className="pt-trigger" to='/'>About Me</Link>
                                
                                </li>
                                <li>
                                  <Link  className="pt-trigger" to='/resume'>Resume</Link>
                                </li>
                                <li>
                                  <Link  className="pt-trigger" to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                  <Link  className="pt-trigger" to="/contact">Contact</Link>
                                </li>
                                
                               
                              </ul>
                              
                            </div>
                           

                           
                            <div className="social-links">
                              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                              <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            </div>
                         
                            <div className="copyrights">© 2020 All rights reserved.</div>
                           
                          </div>
                    </header>
   
                    <div className="mobile-header mobile-visible">
                      <div className="mobile-logo-container">
                        <div className="mobile-header-image">
                          <a href="#">
                              <img src="../images/photo.jpg" alt="image"/>
                          </a>
                        </div>
                        <div className="mobile-site-title"><a href="#">Alex Smith</a></div>
                      </div>

                      <a className="menu-toggle mobile-visible">
                        <i className="fa fa-bars"></i>
                      </a>
                    </div>
                 
                    <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div>
   
          </>
        );
    }
}
export default NavBar;