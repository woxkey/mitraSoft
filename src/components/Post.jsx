import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Post = ({ title, body, avatar, postId, userId }) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    const openComments = () => {
        setShowComments(!showComments);
        getCommentsByPost();
        console.log(comments);
    };

    const getCommentsByPost = async () => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            );
            const data = await response.data;
            setComments(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = () => {
        navigate(`/${userId}`);
    };

    return (
        <Col>
            <Image
                className="myAvatar"
                onClick={handleClick}
                roundedCircle
                thumbnail
                width={40}
                height={40}
                src={avatar}
                alt="avatar"
            />
            <h3>{title}</h3>
            <p>{body}</p>
            <Button onClick={openComments}>Comments</Button>
            {showComments &&
                comments.map((comment) => {
                    return <div key={comment.id}>
                        <h5>{comment.email}</h5>
                        <p>{comment.body}</p>
                    </div>;
                })}
        </Col>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
};

export default Post;
