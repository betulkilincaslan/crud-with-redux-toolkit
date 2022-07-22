import React, { useEffect, useState } from "react";
import FormContainer from "components/common/form/FormContainer";
import FormHeader from "components/common/form/FormHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync, usersLoginData } from "redux/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "components/common/button/Button";
import Input from "components/common/input/Input";
import { v4 as uuidv4 } from "uuid";

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

    const matchedLoginData = loginDataforUsers.filter(
      (data) => data.username === username && data.password === password
    );

    if (matchedLoginData.length > 0) {
      const token = uuidv4();
      const userId = matchedLoginData[0].userId;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      navigate(`/todos`);
    } else {
      toast.warning("Username or password is wrong!");
    }
  };

  return (
    <section className="mt-20 xl:mt-28">
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
