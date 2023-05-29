import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch, sortPosts } from "../redux/posts/postState";
import Post from "../components/Post";
import { Container } from "react-bootstrap";
import postSaga from "../redux/posts/postSaga";
import { saga } from "../store";
import MyPagination from "../helpers/MyPagination";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

const Posts = () => {
    const posts = useSelector((state) => state.posts.posts);
    const [page, setPage] = useState(1);
    const [totalPage] = useState(5);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        saga.run(postSaga, page);
        dispatch(getPostsFetch());
    }, [dispatch, page]);

    const handleChangePage = useCallback((page) => {
        setPage(page);
    }, []);

    const handleSort = () => {
        dispatch(sortPosts());
    };

    return (
        <Container>
            <div className="d-flex align-items-center pb-5">
                {totalPage > 1 && (
                    <MyPagination
                        total={totalPage}
                        current={page}
                        onChangePage={handleChangePage}
                    />
                )}
                <Button className="me-3" onClick={handleSort} variant="primary">
                    Sort
                </Button>
                <Form.Control
                    className="me-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                />
                <img
                    onClick={() => setSearch("")}
                    className="myInput"
                    src="../public/closeBtn.svg"
                    alt="#"
                />
            </div>
            <div className="d-flex flex-column">
                {posts
                    .filter((post) => {
                        return search.toLowerCase() === ""
                            ? post
                            : post.title.toLowerCase().includes(search);
                    })
                    .map((post) => {
                        return (
                            <Post
                                userId={post.userId}
                                key={post.id}
                                title={post.title}
                                body={post.body}
                                avatar={"https://spaces.forlanso.com/public/avatar.png"}
                                postId={post.id}
                            />
                        );
                    })}
            </div>
        </Container>
    );
};

export default Posts;