import React from "react";
import Navbar from "./Navbar";
import Service from "./service.png"
function Services()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Service} height="500" width="100%"/>
            <br/><br/><br/><br/>
            <div id="container">
                    <div className="abc">
                    <h1>HAIRCUT</h1>
                    <p>We the best haircut in the world Donald Trump also does haircut in our shop</p>
                    <p style={{color:"red"}}>62.00</p>
                    </div>
                    <div className="abc">
                    <h1>BEARD TRIM</h1>
                    <p>We trim the beard without pain</p>
                    <p style={{color:"red"}}>62.00</p>
                    </div>
                    <div className="abc">
                    <h1>MANS SHAVE</h1>
                    <p>We will do it without blood coming out</p>
                    <p style={{color:"red"}}>62.00</p>  
                    </div>
                    <div className="abc">
                    <h1>HAIR DYEING</h1>
                    <p>We will dye your hair in any colour</p>
                    <p style={{color:"red"}}>62.00</p>  
                    </div>
                    <div className="abc">
                    <h1>MUSTACHE</h1>
                    <p>We will do the mustache nicely</p>
                    <p style={{color:"red"}}>62.00</p>  
                    </div>
                    <div className="abc">
                    <h1>STACKING</h1>
                    <p>The stacking will be nice</p>
                    <p style={{color:"red"}}>62.00</p>  
                    </div>
                </div>
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
export default Services;