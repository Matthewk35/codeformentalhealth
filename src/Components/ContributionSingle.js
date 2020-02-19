import * as React from "react";
import SpeechBubble from "./SpeechBubble";
import Profile from "./Profile";

export default function ContributionSingle(props) {
    const { contribution, order } = props;
    if (!contribution)
        return;

    const { summary, name, job, employerCurrent, employerPrev, socials, image } = contribution

    return (
        <div
            className='contributions_contributionsSingle'
            style={{order : order}}
        >
            <SpeechBubble
                summary={summary}
            />
            <Profile
                image={image}
                name={name}
                job={job}
                employerCurrent={employerCurrent}
                employerPrev={employerPrev}
                socials={socials}
            />
        </div>
    )
}