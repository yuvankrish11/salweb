import React from "react";  
import Navbar from "./Navbar";
import Working from "./working hours.png";
function Workinghours()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/><br/>
            <img src={Working} height="400" width="100%"></img>
            <br/><br/><br/><br/>
            <div className="card-group" style={{backgroundColor:"black",color:"white"}}>
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src="https://technext.github.io/haircut/img/open.jpg" height="400" width="600"/>
                    </div>  
                </div> 
                <div className="card">
                    <div className="card-body"  style={{backgroundColor:"black",color:"white"}}>
                    <h1>PROFESSIONAL BARBERS ARE WAITING FOR YOU</h1>
                        <p style={{color:"red"}}>MONDAY 09 AM - 09 PM</p>
                        <p style={{color:"red"}}>TUESDAY 09 AM - 09 PM</p>
                        <p style={{color:"red"}}>WEDNESDAY 09 AM - 09 PM</p>
                        <p style={{color:"red"}}>THURSDAY 09 AM - 09 PM</p>
                        <p style={{color:"red"}}>FRIDAY 09 AM - 09 PM</p>
                        <p style={{color:"red"}}>SAT / SUN  CLOSED</p>
                    </div>  
                </div>  
                </div> 
        </>
    );
}
export default Workinghours;