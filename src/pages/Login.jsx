import { useLocation, useNavigate } from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, {replace: true}));
  }

  return (
    <div>
      <h1>Вход</h1>
      <form action="" onSubmit={handleSubmit}>
        <MyInput name="username" placeholder="Логин"/>
        <MyInput placeholder="Пароль"/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
};

export default Login;
