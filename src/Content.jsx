import React from "react";
import Pp from "./pp.jpg";
import Pp3 from "./pp3.jpg";
import Pp4 from "./pp4.jpg";
function Content()
{
    return(
        <>
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
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"black",color:"white"}}>
                    <img src="https://technext.github.io/haircut/img/price.jpg"/>
                    </div>  
                </div>  
                </div>
                <br/><br/>
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
                <div className="container-fluid text-center" style={{backgroundColor:"black",color:"white"}}>
                    <h1 style={{paddingTop:"50px"}}>WHAT OUR CLIENTS SAY!</h1>
                    <h3>Donald Trump</h3>
                    <h4 style={{color:"red"}}>Business man and Ex- President of USA</h4>
                    <p style={{color:"grey"}}>Yuvan Krishna salon has fantastic service and is best in USA.<br/> 
                    I did my haircut from here and it is so lucky that I became president. Great Service. Must try once</p>
                    <img src="https://s1.dmcdn.net/v/Mzbz41QObQKJtohtC/x1080" height="200" width="250"/>
                    
                </div>
                <br/>
                <div className="container text-center">
                <h1>Our details</h1>
                    <p style={{color:"red"}}>Location: 12A JALAN 2/1 TAMAN MELODI 86000 KLUANG,JOHOR,MALAYSIA</p>
                    <p style={{color:"red"}}>Contact Number: +60143240962</p>
                    <p style={{color:"red"}}>Email: yuvankrish01@gmail.com</p>
                </div>
                <div className="container">
                    <div className="card-group">
                        <div className="card">
                        <div className="card-body" style={{backgroundColor:"black"}}>
                            <h1>Have Any Query? Please Contact Us!</h1>
                            <p>The contact form is currently inactive</p>
                            <form method="post">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <br/>
                                <input type="text" placeholder="Subject" size="44"/>
                                <br/>
                                <textarea rows="3" cols="42" placeholder="Message"/>
                                <br/>
                                <button type="submit" className="btn btn-danger" style={{height:"50px",width:"420px"}}>Send Message</button>
                            </form>
                        </div> 
                        </div>
                        <div className="card">
                        <div className="card-body">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.308170653043!2d103.29280931744384!3d2.032514500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d06c40d5acfab3%3A0x168a47f7dc4aa099!2s28%2C%20Jln%20Haji%20Dollah%2C%20Taman%20Melanti%2C%2086000%20Kluang%2C%20Johor!5e0!3m2!1sen!2smy!4v1647342461955!5m2!1sen!2smy" width="500" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div> 
                        </div>
                    </div>
                </div>

        </>
    );
}
export default Content;