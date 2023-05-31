import { Image, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import menu from '../../public/list.svg';
import myPhoto from '../../public/photo.jpg'

const SideNav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShow = () => setShowNav(!showNav);
    return (
        <>
            <Offcanvas show={showNav} onHide={handleShow}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Hi There!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column">
                    <div className="d-flex flex-column align-items-center mb-5">
                        <Image
                            roundedCircle
                            width={150}
                            height={150}
                            src={myPhoto}
                        />
                        <h4 className="mt-3">Alen</h4>
                        <p>bolatovalen@gmail.com</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Link
                            className="text-primary text-decoration-none fs-3 myLink"
                            onClick={() => setShowNav(false)}
                            to={"/"}
                        >
                            Posts
                        </Link>
                        <Link
                            className="text-primary text-decoration-none fs-3 myLink"
                            onClick={() => setShowNav(false)}
                            to={"/about-me"}
                        >
                            About me
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Image
                fluid
                width={30}
                height={30}
                src={menu}
                onClick={handleShow}
                className="myImage"
            />
        </>
    );
};

export default SideNav;
