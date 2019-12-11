import * as React from "react";
import SpeechBubble from "./SpeechBubble";
import Profile from "./Profile";

export default function ContributionSingle(props) {
    const { contribution, order } = props;
    if (!contribution)
        return;

    const { summary, name, job, employerCurrent, employerPrev, socials } = contribution

    return (
        <div
            className='contributionsSingle'
        >
            <SpeechBubble
                summary={summary}
                order={order}
            />
            <Profile
                name={name}
                job={job}
                employerCurrent={employerCurrent}
                employerPrev={employerPrev}
                socials={socials}
            />
        </div>
    )
}