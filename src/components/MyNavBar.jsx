import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

const MyNavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar className="mb-3" bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <Nav.Link
                                className="d-flex align-items-center"
                                onClick={() => navigate("/")}
                            >
                                Posts
                            </Nav.Link>
                            <Nav.Link
                                className="d-flex align-items-center"
                                onClick={() => navigate("/about-me")}
                            >
                                About me
                            </Nav.Link>
                        </div>
                        <SideNav />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavBar;
