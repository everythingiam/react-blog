import MyButton from "../UI/button/MyButton";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <article className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title} </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <Link to={`/posts/${props.post.id}`}>Открыть</Link>
        <MyButton onClick={() => props.removePost(props.post)}>Удалить</MyButton>
      </div>
    </article>
  );
};

export default PostItem;

// (Вместо useHistory() теперь используется useNavigate()
//  const navigate = useNavigate()
//   function transitToPost(id) {
//     navigate(`/posts/${id}`, { replace: true })
//   }
// //
// <MyButton onClick={() => transitToPost(props.post.id)}>
//           Открыть
//         </MyButton>