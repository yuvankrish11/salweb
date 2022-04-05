import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Ourbarbers from "./Ourbarbers";
import Pricingplan from "./Pricingplan";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Workinghours from "./Workinghours";
import Contact from "./Contact";
function App() {
  return (
    <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Aboutus}/>
            <Route exact path="/barbers" component={Ourbarbers}/>
            <Route exact path="/pricing" component={Pricingplan}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/testimonial" component={Testimonial}/>
            <Route exact path="/workinghours" component={Workinghours}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Home}/>
        </Switch>
    </>
  );
}

export default App;
