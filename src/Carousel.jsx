import React from "react";
function Carousel()
{
    return(
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://technext.github.io/haircut/img/carousel-2.jpg" alt="Los Angeles" className="d-block" height="800px" width="100%"/>
                <div className="carousel-caption">
                    <h3 className="display-1">LUXURY HAIRCUT AT AFFORDABLE PRICE</h3>
                    <h2>12A Jalan 2/1 Taman Melodi 86000,Kluang,Johor</h2>
                    <h2>+60143240962</h2>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://technext.github.io/haircut/img/carousel-1.jpg" alt="Chicago" className="d-block" height="800px" width="100%"/>
                <div className="carousel-caption">
                <h3 className="display-1">WE WILL KEEP YOU AN AWESOME LOOK</h3>
                    <h2>12A Jalan 2/1 Taman Melodi 86000,Kluang,Johor</h2>
                    <h2>+60143240962</h2>
                </div> 
                </div>
                <div className="carousel-item">
                <img src="https://technext.github.io/haircut/img/carousel-2.jpg" alt="New York" className="d-block" height="800px" width="100%"/>
                <div className="carousel-caption">
                <h3 className="display-1">Yuvan Krishna HAIRCUT(YKHC)</h3>
                    <h2>12A Jalan 2/1 Taman Melodi 86000,Kluang,Johor</h2>
                    <h2>+60143240962</h2>
                </div>  
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
            <br/>
        </>
    );
}
export default Carousel;