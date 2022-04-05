import React from "react";
import Navbar from "./Navbar";
import Contactuss from "./contact us.png"
function Contact()
{
    return(
        <>
            <Navbar/>
            <br/><br/><br/>
            <img src={Contactuss} height="500" width="100%"/>
            <br/><br/><br/><br/>
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
export default Contact;