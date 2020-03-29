import * as React from "react";
import Header from "../Components/Header";
import Contributions from "../Components/Contributions";
import Purpose from "../Components/Purpose";
import Footer from "../Components/Footer";

class Home extends React.Component {
    render() {
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