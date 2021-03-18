import React from 'react';
class Contact extends React.Component {
    render(){
        return(
          <>
          <section className="pt-page" id="contact">
                        <div className="section-inner custom-page-content">
                            <div className="section-title-block second-style">
                                <h2 className="section-title">Contact</h2>
                                <h5 className="section-description">Get in Touch</h5>
                            </div>
                            <div className="section-content">
                               
                              
                                
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="col-inner bs-30">
                                            <div className="lm-info-block gray-default">
                                                <i className="lnr lnr-phone-handset"></i>
                                                <h4>415-832-2000</h4>
                                                <span className="lm-info-block-value"></span>
                                                <span className="lm-info-block-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="col-inner bs-30">
                                            <div className="lm-info-block gray-default">
                                                <i className="lnr lnr-map-marker"></i>
                                                <h4>San Francisco</h4>
                                                <span className="lm-info-block-value"></span>
                                                <span className="lm-info-block-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="col-inner bs-30">
                                            <div className="lm-info-block gray-default">
                                                <i className="lnr lnr-envelope"></i>
                                                <h4><a href="https://lmpixels.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a1c0cdc4d9e1c4d9c0ccd1cdc48fc2cecc">[email&#160;protected]</a></h4>
                                                <span className="lm-info-block-value"></span>
                                                <span className="lm-info-block-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3">
                                        <div className="col-inner bs-30">
                                            <div className="lm-info-block gray-default">
                                                <i className="lnr lnr-checkmark-circle"></i>
                                                <h4>Freelance Available</h4>
                                                <span className="lm-info-block-value"></span>
                                                <span className="lm-info-block-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="row">
                                    <div className=" col-xs-12 col-sm-8 offset-sm-1 offset-sm-2">
                                        <div className="col-inner ts-20">
                                            <div className="block-title">
                                                <h3>How Can I Help You?</h3>
                                            </div>
                                            <form id="contact_form" className="contact-form" action="https://lmpixels.com/demo/kerge-html/one-page/version-1-dark/contact_form/contact_form.php" method="post">
                                                <div className="messages"></div>
                                                <div className="controls two-columns">
                                                    <div className="fields clearfix">
                                                        <div className="left-column">
                                                            <div className="form-group form-group-with-icon">
                                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Full Name" required="required" data-error="Name is required."/>
                                                                <div className="form-control-border"></div>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                            <div className="form-group form-group-with-icon">
                                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required."/>
                                                                <div className="form-control-border"></div>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                            <div className="form-group form-group-with-icon">
                                                                <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required."/>
                                                                <div className="form-control-border"></div>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="right-column">
                                                            <div className="form-group form-group-with-icon">
                                                                <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                                                                <div className="form-control-border"></div>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>
                                                    <input type="submit" className="button btn-send" value="Send message" />
                                                </div>
                                            </form>
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
export default Contact;