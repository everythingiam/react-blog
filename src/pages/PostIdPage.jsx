import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    console.log(response.data);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h2>Пост #{post.id}</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2 style={{marginTop: '30px'}}>Комментарии</h2>
      {comments.map((com) => (
        <div key={com.id} style={{marginTop: '10px'}}>
          <h3>{com.email}</h3>
          <p>{com.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostIdPage;

