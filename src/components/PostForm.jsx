import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const PostForm = ({createPost}) => {
   const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    
    createPost(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form action="" onSubmit={(e) => addNewPost(e)}>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.body}
        onChange={(e) => setPost({...post, body: e.target.value})}
      />
      <MyButton>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
