import React, { useEffect, useState } from "react";
import FormContainer from "components/common/form/FormContainer";
import FormHeader from "components/common/form/FormHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync, usersLoginData } from "redux/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "components/common/button/Button";
import Input from "components/common/input/Input";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginDataforUsers = useSelector(usersLoginData);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const onInputChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const isMatchLoginData = loginDataforUsers.some(
      (data) => data.username === username && data.password === password
    );

    if (isMatchLoginData) {
      let token = Math.random();
      localStorage.setItem("token", token);
      navigate(`/todos`);
    } else {
      toast.warning("Username or password is wrong!");
    }
  };

  return (
    <section className="md:mt-64 mt-52">
      <FormContainer className="shadow-xl">
        <FormHeader>Login</FormHeader>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => onInputChangeHandler(e)}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => onInputChangeHandler(e)}
          ></Input>
          <div>
            <Button type="submit" color="bg-belizeHole hover:bg-peterRiver">
              Login
            </Button>
          </div>
        </form>
      </FormContainer>
    </section>
  );
};

export default LoginScreen;
