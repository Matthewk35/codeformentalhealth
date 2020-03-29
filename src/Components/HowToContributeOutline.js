import * as React from "react";
import SubHeader from "./SubHeader";
import {ghRepo} from "../Constants/SingleLinks";
import {ContributionMethods} from "../Constants/ContributionMethods";
import HowToContributeMethod from "./HowToContributeMethod";

export default class HowToContributeOutline extends React.Component {
    render() {
        return (
            <section
            >
                <SubHeader
                    title={"How to contribute"}
                    desc={"This site is intended to be made by the tech community, for the tech community."}
                />

                <p>
                    Simply raise a <a href={ghRepo} target="_blank" rel="noopener noreferrer">pull request into master</a> with any of the following:
                </p>

                <div
                    className='contributions_contributionsContainer'
                >
                    {
                        Object.values(ContributionMethods).map((method, id)=>{
                            return (
                                <HowToContributeMethod
                                    key={id}

                                    title={method.title}
                                    description={method.description}
                                    example={method.example}
                                    examplePR={method.examplePR}
                                />
                            )
                        })
                    }
                </div>

            </section>
        )
    }
}