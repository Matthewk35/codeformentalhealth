import React from 'react';
import {Routes} from "../Constants/Routes";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <section>
            <h5>
                Disclaimer: This website has not been built by mental health experts. We are simply a community who wish to share their experiences.
            </h5>
            <h5>Please do reach out to the experts, there are some useful links over on the <Link to={Routes.help}>getting help page</Link>.</h5>
        </section>
    );
}

export default Footer;
