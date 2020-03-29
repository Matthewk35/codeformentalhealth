import * as React from "react";
import Header from "../Components/Header";
import Contributions from "../Components/Contributions";
import Purpose from "../Components/Purpose";
import Footer from "../Components/Footer";

class Home extends React.Component {
    render() {
        if (false){
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
                <Purpose/>
                <Contributions/>
                <Footer/>
            </div>
        )
    }
}

export default Home;