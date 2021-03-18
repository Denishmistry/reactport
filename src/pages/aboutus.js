import React from 'react';
import data  from "./data.json";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const socialMediaList = data.SocialMedias;

class AboutUS extends React.Component {
    render(){
        return(
          <>

 

                    <section className="pt-page" id="about-me">
                        <div className="section-inner start-page-full-width">
                            <div className="start-page-full-width">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="inner-content">
                                            <div className="fill-block"></div>
                                        </div>
                                    </div>


                   {
                    data.About.map((about) => {
                        return (    

                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="inner-content">
                                            <div className="hp-text-block">
                                                
                                                <div className="text-rotation">
                                                    <div className="item">
                                                        <div className="sp-subtitle">{about.designation}</div>
                                                    </div>
                                                    
                                                </div>
                                            
                                                <h2 className="hp-main-title">{about.name}</h2>
                                                <p>{about.aboutdescription}</p>
                                                
                                                <div className="hp-buttons">
                                                    <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            );
                        })
                    }
                                </div>
                            </div>
                        </div>
                        <div className="section-inner custom-page-content">
                            <div className="page-content">

                    {
                    data.Whatido.map((wid) => {
                        return ( 
                            <>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="col-inner">
                                            <div className="block-title">
                                                <h3>{wid.maintitle}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">

                                {
                                    wid.Widdescription.map((widblock,i) => {
                                      return (


                                                <div key={i} className="col-xs-12 col-sm-6">
                                                    <div className="col-inner">
                                                        <div className="info-list-w-icon">
                                                          
                                                            <div className="info-block-w-icon">
                                                                <div className="ci-icon">

                                                                    <i className={widblock.icon}></i>
                                                                </div>
                                                                <div className="ci-text">
                                                                    <h4>{widblock.widtitle}</h4>
                                                                    <p>{widblock.widdesc}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>    
                                      );
                                    })
                                  }     
                                </div>
                                </>
                           );
                        })
                    }          
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="col-inner ts-25 bs-50">
                                           
                                            <div className="block-title">
                                                <h3>Testimonials<span></span></h3>
                                            </div>
                                            

                                            <OwlCarousel className='testimonials owl-carousel' loop margin={10} nav>
                                            

                                            {
                                                data.Testimonial.map((testimonial, i) => {
                                                    return (
                                               
                                                                <div key={i} className="testimonial-item">
                                                                
                                                                    <div className="testimonial-content">
                                                                        <div className="testimonial-text">
                                                                            <p>{testimonial.comment}</p>
                                                                        </div>
                                                                    </div>
                                                              
                                                                    <div className="testimonial-credits">
                                                                        
                                                                        <div className="testimonial-picture">
                                                                            <img src={testimonial.clientimageurl} alt="Gary Johnson" />
                                                                        </div>
                                                                       
                                                                        <div className="testimonial-author-info">
                                                                            <p className="testimonial-author">{testimonial.clientname}</p>
                                                                            <p className="testimonial-firm">{testimonial.clientfirm}</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                    );
                                                })
                                            }
                                                                        
                                            </ OwlCarousel >
                                   
                                      
                                          
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="col-inner">
                                          
                                            <div className="block-title">
                                                <h3>Clients<span></span></h3>
                                            </div>
                                          <OwlCarousel className='clients owl-carousel' loop items={5} margin={10} nav>
                                            
                                           
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-7.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-6.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-5.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-4.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-3.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-2.png" alt="Logo" />
                                                    </a>
                                                </div>
                                                <div className="client-block">
                                                    <a href="#" target="_blank" title="Logo">
                                                        <img src="../images/clients/client-1.png" alt="Logo" />
                                                    </a>
                                                </div>
                                            </OwlCarousel>
                                           
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
          </>
        );
    }
}
export default AboutUS;