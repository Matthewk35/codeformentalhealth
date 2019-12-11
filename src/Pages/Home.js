import * as React from "react";
import Header from "../Components/Header";
import Contributions from "../Components/Contributions";

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Contributions/>
            </div>
        )
    }
}

export default Home;