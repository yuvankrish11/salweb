import React from "react";
import Navbar from "./Navbar"
import Carousel from "./Carousel"
import Content from "./Content";
function Home()
{
    return(
        <>
            <Navbar/>
            <Carousel/>
            <Content/>
        </>
    )
}
export default Home;