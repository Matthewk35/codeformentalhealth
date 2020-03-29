import React from 'react';
import {Routes} from "../Constants/Routes";
import {Link} from "react-router-dom";

function Header() {
  return (
    <section className="App">
        <div style={{backgroundColor:'red', color:'#fff', padding:20}}>
            <h4>Trigger Warning:</h4>
            <p>
                Content on this website contains information and discussions of mental illness and mental health crisis which some readers may find triggering.
                If you require support at any time, please call Samaritans for free on 116 123 or visit the <a style={{color:'#fff'}} href={"https://www.samaritans.org/how-we-can-help/contact-samaritan/"}>Samaritans getting help site</a>.
            </p>
        </div>
        <h1>Code For Mental Health</h1>
        <h2>An community-driven, open-source, mental health safe-space</h2>
        <div
            className="header_navigation-links"
        >
            {
                Object.values(Routes).map((route)=>{
                    return(
                        <Link to={route.link}>
                            {route.title}
                        </Link>
                    )
                })
            }
        </div>
    </section>
  );
}

export default Header;
