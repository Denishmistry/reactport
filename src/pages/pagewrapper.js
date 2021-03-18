import React from 'react';
import AboutUS from './aboutus';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contactus';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class PageWrapper extends React.Component {
    render(){
        return(
          
           <>
                <div id="main" className="site-main">
                  <div className="pt-wrapper">
                    <div className="subpages">
                    <Switch>
                       <Route  exact path="/" component={AboutUS} />
                       <Route path="/resume" component={Resume} />
                       <Route path="/portfolio" component={Portfolio} />
                       <Route path="/contact" component={Contact} /> 
                       
                      </Switch> 
                    </div>
                  </div>
                </div>
          </>  
         
        );
    }
}
export default PageWrapper;