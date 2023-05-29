import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container className="pt-3">
            <Outlet />
        </Container>
    );
};

export default Layout;
