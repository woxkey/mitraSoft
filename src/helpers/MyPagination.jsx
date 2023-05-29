import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

export default function MyPagination({ total, current, onChangePage }) {
    let items = [];

    items.push(
        <Pagination.Prev
            key="prev"
            onClick={() => {
                if (current === 1) return;
                onChangePage(current - 1);
            }}
        />
    );

    for (let page = 1; page <= total; page++) {
        items.push(
            <Pagination.Item
                key={page}
                active={page === current}
                onClick={() => {
                    onChangePage(page);
                }}
            >
                {page}
            </Pagination.Item>
        );
    }

    items.push(
        <Pagination.Next
            key="next"
            onClick={() => {
                if (current === total) return;
                onChangePage(current + 1);
            }}
        />
    );

    return <Pagination className="m-0 me-3">{items}</Pagination>;
}

MyPagination.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
};
