import * as React from "react";

export default function GettingHelpResource(props) {
    const { title, link, description } = props;
    if (!title || !link || !description)
        return <></>;

    return (
        <div className='contributions_contributionsSingle'>
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={link}>Visit Site</a>
        </div>
    )
}