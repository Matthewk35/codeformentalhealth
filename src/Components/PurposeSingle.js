import * as React from "react";

export default function PurposeSingle(props) {
    const { headline, desc, quote, quoteSource, quoteUrl } = props;
    if (!headline || !desc)
        return <></>;

    return (
        <div
            className={'purpose_purposeList_single'}
        >
            <h4>{headline}</h4>
            {
                quote && quoteSource && quoteUrl &&
                <div>
                    <q>
                        {quote}
                    </q>
                    <span
                        className={'purposeSingle_quoteSource'}
                    >
                         - <a href={quoteUrl}>{quoteSource}</a>
                    </span>
                </div>

            }
            <p>{desc}</p>
        </div>
    )
}