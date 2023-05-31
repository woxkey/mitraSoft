import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MyNavBar from "./MyNavBar.jsx";

const Layout = () => {
    return (
        <>
            <MyNavBar />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;
