import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
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
        <div className="mb-5">
            <div className="d-flex align-items-center">
                <Image
                    className="myAvatar me-3"
                    onClick={handleClick}
                    roundedCircle
                    width={25}
                    height={25}
                    src={avatar}
                    alt="avatar"
                />
                <div>
                    <h3 className="lh-sm myTitle">{title}</h3>
                    <p className="lh-sm">{body}</p>
                </div>
            </div>
            <Button className="w-100" variant="light" onClick={openComments}>
                Comments
            </Button>
            <div >
                {showComments &&
                    comments.map((comment) => {
                        return (
                            <div className="px-5 py-3" key={comment.id}>
                                <h5>{comment.email}</h5>
                                <p>{comment.body}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
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
