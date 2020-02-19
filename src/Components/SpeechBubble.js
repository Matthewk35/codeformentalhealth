import * as React from "react";

export default function SpeechBubble(props){
    return (
        <div
            className='contributions_speechBubble-contributionsSingleSpeech boxShadowStandard'
        >
            <h6>
                {props.summary}
            </h6>
        </div>
    )
}