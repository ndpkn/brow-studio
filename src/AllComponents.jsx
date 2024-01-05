import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Lines from "./components/Lines/Lines";
import Portfolio from "./components/Portfolio/Portfolio";
import Studio from "./components/Studio/Studio";
import Contacts from "./components/Contacts/Contacts";

const AllComponents = () => {
    return (
        <>
            <Header />
            <Welcome />
            <About />
            <Services />
            <Lines/>
            <Portfolio />
            <Studio />
            <Contacts />
        </>
    )
}

export default AllComponents