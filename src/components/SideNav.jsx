import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideNav = ({ showNav, handleShow }) => {
    return (
        <Offcanvas show={showNav} onHide={handleShow}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                <Link to={'/'}>Posts</Link>
                <Link to={'/about-me'}>About me</Link>
            </Offcanvas.Body>
        </Offcanvas>

    );
};

SideNav.propTypes = {
    showNav: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired,
};

export default SideNav;
