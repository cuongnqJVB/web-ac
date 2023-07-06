import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Layout = () => {
    return (
        <section className="healthy-app w-full h-full flex flex-col bg-light-white">
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Layout;