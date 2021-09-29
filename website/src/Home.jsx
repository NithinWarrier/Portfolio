import React from "react";
import './Home.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Home (){
    return (
        <div className="container">
            <div className="nameField">
                <p>Hi,</p>
                <p>I'm &nbsp; <span className="name">Nithin M Warrier</span></p>
                <p className="tagline">Interaction Designer</p>
                <p className="links"> 
                    <a className="linkItems" href="/">
                        <img src="behance.svg" alt="" /> 
                    </a> 
                    <a className="linkItems" href="/">
                        <img src="insta.svg" alt="" /> 
                    </a>
                    <a className="linkItems" href="/">
                        <img src="linkedin.svg" alt="" />
                    </a>
                </p>
            </div>
            <div className="profile">
                <div className="imgContainer">
                    <img src="profile.png" alt="" />
                </div>
            </div>
                <p className="scrolldown"> <ExpandMoreIcon style={{ fontSize: 48}} /> Scroll down for more details</p>
            
        </div>
    );
}

export default Home;