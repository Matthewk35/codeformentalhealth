import * as React from "react";
import ContributionSingle from "./ContributionSingle";
import SubHeader from "./SubHeader";

class Contributions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contributions : null
        }
    }

    componentDidMount() {
        const contributions = this.loadJson();
        this.setState({contributions})
    }

    getFileNameOnly(filePath) {
        return filePath.split('/').pop().split('.').shift();
    }

    loadJson() {
        const requireContext = require.context('../Contributions', false, /\.json$/);
        const json = {};
        requireContext.keys().forEach((key) => {
            const obj = requireContext(key);
            const simpleKey = this.getFileNameOnly(key);
            json[simpleKey] = obj;
        });
        return json;
    }

    render() {
        const { contributions } = this.state;

        if (!contributions)
            return <h1>Loading...</h1>

        return (
            <section>
                <SubHeader
                    title={"Contributions from our community"}
                    desc={"Here are some contributions from our community"}
                />
                <div
                    className='contributions_contributionsContainer'
                >
                    {
                        Object.keys(contributions).map((contribution, id) =>(
                            <ContributionSingle
                                key={id}
                                order={Math.floor(Math.random() * 1000)}
                                contribution={contributions[contribution]}
                            />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Contributions;