import React from "react";
import FormButton from "components/common/FormButton";
import FormContainer from "components/common/FormContainer";
import FormHeader from "components/common/FormHeader";
import FormInput from "components/common/FormInput";
import FormLabel from "components/common/FormLabel";

const LoginScreen = () => {
  return (
    <section className="py-12 w-full min-h-max">
      <FormContainer>
        <FormHeader>Login</FormHeader>
        <form>
          <div>
            <FormLabel htmlFor="username">Username</FormLabel>

            <FormInput
              placeholder="Username"
              type="text"
              name="username"
            ></FormInput>
          </div>
          <div>
            <FormLabel htmlFor="password">Password</FormLabel>

            <FormInput
              placeholder="Password"
              type="password"
              name="password"
            ></FormInput>
          </div>
          <div>
            <FormButton type="submit" color="cyan">
              Login
            </FormButton>
          </div>
        </form>
      </FormContainer>
    </section>
  );
};

export default LoginScreen;
