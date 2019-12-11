import * as React from "react";

class ContributionSingle extends React.Component {
    render() {
        const { contribution } = this.props;

        if (!contribution)
            return;

        return (
            <div
                className='contributionsSingle boxShadowStandard'
                style={{order : this.props.order}}
            >
                <h3>
                    {contribution.name}
                </h3>
                <p>
                    {contribution.job} @ {contribution.employerCurrent}
                </p>
                <p>
                    {contribution.employerPrev.map((emp)=>{return <span className='prevRoleItem'>{emp}</span>})}
                </p>
                <h6>
                    {contribution.summary}
                </h6>
            </div>
        )
    }
}

export default ContributionSingle;