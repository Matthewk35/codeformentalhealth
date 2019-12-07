import * as React from "react";

class ContributionSingle extends React.Component {
    render() {
        const { contribution } = this.props;

        if (!contribution)
            return;

        return (
            <div>
                <h3>
                    {contribution.name}
                </h3>
                <p>
                    {contribution.job}
                </p>
            </div>
        )
    }
}

export default ContributionSingle;