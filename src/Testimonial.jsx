import React from "react";
import Navbar from "./Navbar";
import Testimonials from "./testimonial.png";
function Testimonial()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Testimonials} height="500" width="100%"/>
            <br/><br/><br/><br/>
            <div className="container-fluid text-center" style={{backgroundColor:"black",color:"white"}}>
                    <h1 style={{paddingTop:"50px"}}>WHAT OUR CLIENTS SAY!</h1>
                    <h3>Donald Trump</h3>
                    <h4 style={{color:"red"}}>Business man and Ex- President of USA</h4>
                    <p style={{color:"grey"}}>Yuvan Krishna salon has fantastic service and is best in USA.<br/> 
                    I did my haircut from here and it is so lucky that I became president. Great Service. Must try once</p>
                    <img src="https://s1.dmcdn.net/v/Mzbz41QObQKJtohtC/x1080" height="200" width="250"/>
                    
                </div>
                
        </>
    );
}
export default Testimonial;