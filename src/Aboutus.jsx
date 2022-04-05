import React from "react";
import Navbar from "./Navbar";
import About from "./about.png"
import Pp from "./pp.jpg";
import Pp3 from "./pp3.jpg";
import Pp4 from "./pp4.jpg";
function Aboutus()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={About} height="500" width="100%"/>
            <br/><br/><br/>
            <div className="card-group">
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src="https://technext.github.io/haircut/img/about.jpg" width="400" height="400"/>
                    </div>  
                </div> 
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                        <h1>MORE THAN JUST A HAIRCUT. LEARN MORE ABOUT US!</h1>
                        <p>
                        Back 10 years ago when my dad had very bad haircut experience even paying more money. He thought to start a hairshop
                        which will provide best hairstyle in affordable price
                        </p>
                        <br/>
                        <p>
                        In 2012 my Father started a shop for haircut and named after me as YUVAN KRISHNA SALOON. It became so famous due to its to
                        stylish hair and affordable price that we started more branches. Now I am the CEO of this company and we have
                        hairstylist who have minimum 10 years of experience
                        </p>
                    </div>  
                </div>  
                </div>
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
export default Aboutus;