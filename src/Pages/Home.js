import * as React from "react";
import Header from "../Components/Header";
import Contributions from "../Components/Contributions";

class Home extends React.Component {
    render() {
        if (true){
            return (
                <div>
                    <h1>
                        Work in Progress.
                    </h1>
                    <p>
                        Want to help? Reach out - matthewkempa@hotmail.co.uk
                    </p>
                </div>

            )
        }
        return (
            <div className="App">
                <Header/>
                <Contributions/>
            </div>
        )
    }
}

export default Home;