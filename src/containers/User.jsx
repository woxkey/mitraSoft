import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserFetch } from "../redux/users/userState";
import myUserSaga from "../redux/users/userSaga";
import { userPostsSaga, userSaga } from "../store";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myUserPostsSaga from "../redux/users/userPostsSaga";
import { getUserPostsFetch } from "../redux/users/userPostsState";

const User = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const { posts } = useSelector((state) => state.userPosts);

    useEffect(() => {
        userSaga.run(myUserSaga, params.id);
        userPostsSaga.run(myUserPostsSaga, params.id);
        dispatch(getUserFetch());
        dispatch(getUserPostsFetch());
    }, [params, dispatch]);

    return (
        <Container>
            <div>{user.name}</div>
            <Button onClick={() => navigate("/")}>Back</Button>
            <div>
                <h2>Posts</h2>
                {posts.map((post) => {
                    return <div key={post.id}>{post.title}</div>;
                })}
            </div>
        </Container>
    );
};

export default User;