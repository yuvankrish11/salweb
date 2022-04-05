import React from "react";
import Navbar from "./Navbar";
import Barber from "./barber.png";
import Pp from "./pp.jpg";
import Pp3 from "./pp3.jpg";
import Pp4 from "./pp4.jpg";
function Ourbarbers()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Barber} height="500" width="100%"/>
            <br/><br/><br/><br/>
            <h1 className="text-center">MEET OUR BARBER</h1>
                <div className="card-group" style={{backgroundColor:"black",color:"white"}}>
                <div className="card">
                    <div className="card-body"  style={{backgroundColor:"black",color:"white"}}>
                    <img src={Pp} height="300" width="300"/>  
                    <center><h1>Yuvan Krishna Saravanan</h1></center>
                    </div>  
                </div>  
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src="https://technext.github.io/haircut/img/team-1.jpg" height="300" width="300"/>  
                    <center><h1>John Doe</h1></center>
                    </div>  
                </div>  
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src={Pp3} height="300" width="300"/>  
                    <center><h1>Saravanan Krishasamy</h1></center>
                    </div>  
                </div>  
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src={Pp4} height="300" width="300"/>  
                    <center><h1>Mani Periasamy</h1></center>
                    </div>  
                </div>  
                </div>
        </>
    );
}
export default Ourbarbers;