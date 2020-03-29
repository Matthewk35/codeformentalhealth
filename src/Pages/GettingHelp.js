import * as React from "react";
import Header from "../Components/Header";
import GettingHelpOutline from "../Components/GettingHelpOutline";
import Footer from "../Components/Footer";

class GettingHelp extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <GettingHelpOutline/>
                <Footer/>
            </div>
        )
    }
}

export default GettingHelp;