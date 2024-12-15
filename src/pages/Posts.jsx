import { useEffect, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePost } from '../hooks/usePost';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/Pagination';
import { Outlet } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа Javascript', body: 'гг Description' },
    { id: 2, title: 'дд Javascript', body: 'д Description' },
    { id: 3, title: 'бб Javascript', body: 'аа Description' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePost(posts, filter.query, filter.sort);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];

    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (curPost) => {
    setPosts(posts.filter((post) => post.id !== curPost.id));
  };

  const changePage = (p) => {
    setPage(p);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>

      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <hr style={{ margin: '15px 0' }} />

      <PostFilter setFilter={setFilter} filter={filter} />

      {error && <h1>Произошла ошибка {error}</h1>}

      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={'Список постов'}
          removePost={removePost}
        />
      )}

      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}

export default Posts;

