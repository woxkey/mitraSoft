import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserFetch } from "../redux/users/userState";
import myUserSaga from "../redux/users/userSaga";
import { userPostsSaga, userSaga } from "../store";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myUserPostsSaga from "../redux/users/userPostsSaga";
import { getUserPostsFetch } from "../redux/users/userPostsState";
import Loader from "../components/Loader";
import Post from "../components/Post";

const User = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const { posts } = useSelector((state) => state.userPosts);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        userSaga.run(myUserSaga, params.id);
        userPostsSaga.run(myUserPostsSaga, params.id);
        dispatch(getUserFetch());
        dispatch(getUserPostsFetch());
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 500);
    }, [params, dispatch]);

    return (
        <Container className="pt-3">
            <Button onClick={() => navigate("/")}>Back</Button>
            {showLoader ? (
                <Loader />
            ) : (
                <div className="pt-3">
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Phone Number: {user.phone}</div>
                    <div className="d-flex flex-column mt-5">
                        {posts.map((post) => {
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
                    {posts.map((post) => {
                        return <div key={post.id}>{post.title}</div>;
                    })}
                </div>
            )}
        </Container>
    );
};

export default User;
