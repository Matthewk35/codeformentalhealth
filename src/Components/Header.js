import React from 'react';
import {Routes} from "../Constants/Routes";

function Header() {
  return (
    <section className="App">
        <h1>Code For Mental Health</h1>
        <h2>An community-driven, open-source, mental health safe-space</h2>
        <div
            className="header_navigation-links"
        >
            {
                Object.values(Routes).map((route)=>{
                    return(
                        <a
                            href={route.link}
                            className="header_navigation-linksSingle"
                        >
                            {route.title}
                        </a>
                    )
                })
            }
        </div>
    </section>
  );
}

export default Header;
