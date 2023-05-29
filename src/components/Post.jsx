import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {  useSelector } from "react-redux";
import "../App.css";
import { useNavigate } from "react-router-dom";


const Post = ({ title, body, avatar, postId, userId }) => {
    const { comments } = useSelector((state) => state.comments);
    const navigate = useNavigate();

    const openComments = () => {

    }

    const handleClick = () => {
        navigate(`/${userId}`)
    }

    return (
        <Col>
            <Image className="myAvatar" onClick={handleClick} roundedCircle thumbnail width={40} height={40} src={avatar} alt="avatar" />
            <h3>{title}</h3>
            <p>{body}</p>
            <Button onClick={openComments}>Comments</Button>
            {comments.map((comment) => {
                return (
                    comment.postId === postId && (
                        <div key={comment.id}>
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                    )
                );
            })}
        </Col>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    postId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
};

export default Post;
