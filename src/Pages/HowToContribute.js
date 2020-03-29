import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HowToContributeOutline from "../Components/HowToContributeOutline";

class HowToContribute extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <HowToContributeOutline/>
                <Footer/>
            </div>
        )
    }
}

export default HowToContribute;