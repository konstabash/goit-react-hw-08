import { Container } from "@mui/material";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <LoginForm />
      </Container>
    </>
  );
};
export default LoginPage;
