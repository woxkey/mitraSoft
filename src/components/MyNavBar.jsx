import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import { useState } from "react";

const MyNavBar = () => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);

    const handleShow = () => setShowNav(!showNav);
    
    const handleNavigate = (path) => {
        navigate(path);
        setShowNav(!showNav);
    }
    
    return (
        <>
            <SideNav showNav={showNav} handleShow={handleShow} />
            <Navbar className="mb-3" bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto d-flex justify-content-between w-100">
                        <div className="d-flex">
                            <Nav.Link
                                className="d-flex align-items-center"
                                onClick={() => handleNavigate("/")}
                            >
                                Posts
                            </Nav.Link>
                            <Nav.Link
                                className="d-flex align-items-center"
                                onClick={() => handleNavigate("/about-me")}
                            >
                                About me
                            </Nav.Link>
                        </div>
                        <Image
                            fluid
                            width={30}
                            height={30}
                            src="../../public/list.svg"
                            onClick={handleShow}
                            className="myImage"
                        />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavBar;
