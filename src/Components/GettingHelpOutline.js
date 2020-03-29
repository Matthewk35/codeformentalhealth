import * as React from "react";
import {Routes} from "../Constants/Routes";
import SubHeader from "./SubHeader";
import {GettingHelpResources} from "../Constants/GettingHelpResources";
import GettingHelpResource from "./GettingHelpResource";
import {Link} from "react-router-dom";

export default class GettingHelpOutline extends React.Component {
    render() {
        return (
            <section
            >
                <SubHeader
                    title={"Getting help"}
                    desc={"Below are some useful links for some truly incredible resources and charities. These people are the experts, please use them."}
                />

                <p>
                    Are we missing a resource? Have something to add? Something helped you previously?
                </p>
                <p style={{fontWeight:800}}>
                    Please <Link to={Routes.contribute}>Contribute</Link>
                </p>

                <div
                    className='contributions_contributionsContainer'
                >
                    {
                        Object.values(GettingHelpResources).map((resource)=>{
                            return (
                                <GettingHelpResource
                                    link={resource.link}
                                    title={resource.title}
                                    description={resource.description}
                                />
                            )
                        })
                    }
                </div>

            </section>
        )
    }
}