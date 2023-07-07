import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Layout = () => {
    return (
        <section className="healthy-app">
            <div className="app-content">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </section>
    );
};

export default Layout;