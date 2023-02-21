import React, {Component} from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";
import NewHome from "./NewHome";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <NewHome/>
                {/* <Greet/> */}
                {/* <TypeWriterC/> */}
                {/* <Cards/> */}
                {/* <Footer/> */}
            </React.Fragment>
        );
    }
}

export default Home;