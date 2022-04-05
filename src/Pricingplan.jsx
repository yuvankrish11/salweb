import React from "react";
import Navbar from "./Navbar";
import Price from "./price.png";
function Pricingplan()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Price} height="500" width="100%"/>
            <br/><br/><br/><br/>
            <div className="card-group">
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <h1>CHECK OUT OUR BARBER SERVICES AND PRICES</h1>
                        <p style={{color:"red"}}>HAIRCUT                                                                                                            121.00</p>
                        <p style={{color:"red"}}>BEARD TRIM                                                                                                         146.00</p>
                        <p style={{color:"red"}}>MANS SHAVE                                                                                                          96.00</p>
                        <p style={{color:"red"}}>HAIR DYEING                                                                                                         79.00</p>
                        <p style={{color:"red"}}>MUSTACHE                                                                                                            62.00</p>
                        <p style={{color:"red"}}>STACKING                                                                                                           163.00</p>
                    </div>  
                </div>
                </div>
        </>
    );
}
export default Pricingplan;