import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import { useAuth } from '../hooks/useAuth';

const Layout = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <header className="navbar">
        <NavLink className='navbar__links' to="/about">О сайте</NavLink>
        <NavLink className='navbar__links' to="/posts">Посты</NavLink>
        <NavLink className='navbar__links' to="/login">Войти</NavLink>
        <MyButton className='navbar__links' onClick={() => signout(() => navigate('/posts', {replace: true}))}>Выйти</MyButton>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
