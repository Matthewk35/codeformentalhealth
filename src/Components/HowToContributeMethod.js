import * as React from "react";

export default function HowToContributeMethod(props) {
    const { title, example, description, examplePR } = props;
    if (!title || !example || !description)
        return <></>;

    return (
        <div>
            <h4>{title}</h4>
            <h6>{example}</h6>
            <p>{description}</p>
            <a href={examplePR}>See example PR</a>
        </div>
    )
}