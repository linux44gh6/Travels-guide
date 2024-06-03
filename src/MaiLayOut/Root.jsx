import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <ScrollRestoration></ScrollRestoration>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;