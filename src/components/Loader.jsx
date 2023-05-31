import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div className="d-block">
            <Button variant="primary" disabled>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                <div className="d-inline m-3">Loading...</div>
            </Button>
        </div>
    );
};

export default Loader;
