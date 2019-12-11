import * as React from "react";

export default function SpeechBubble(props){
    return (
        <div
            className='contributionsSingleSpeech boxShadowStandard'
            style={{order : props.order}}
        >
            <h6>
                {props.summary}
            </h6>
        </div>
    )
}