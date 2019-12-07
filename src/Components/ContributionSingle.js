import * as React from "react";

class ContributionSingle extends React.Component {
    render() {
        const { contribution } = this.props;

        if (!contribution)
            return;

        console.log(contribution)

        return (
            <div>
                {contribution.name}
            </div>
        )
    }
}

export default ContributionSingle;