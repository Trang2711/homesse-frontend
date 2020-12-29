import { Link } from "react-router-dom";
function Notification(props) {
    const {userId, postId, title, content} = props
    return(
        <Link to=""><li id={"/posts/" + postId}>Bài đăng "<b>{title}</b>" {content}</li></Link>
    )
}

export default Notification;