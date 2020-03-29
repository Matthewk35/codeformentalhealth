import * as React from "react";

export default function HowToContributeMethod(props) {
    const { title, example, description, examplePR } = props;
    if (!title || !example || !description)
        return <></>;

    return (
        <div className={"contributeToSite_single"}>
            <h4>{title}</h4>
            <p>{description}</p>
            <h6>{example}</h6>
            <a href={examplePR}>See example PR</a>
        </div>
    )
}