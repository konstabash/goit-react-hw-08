import { Container } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <RegistrationForm />
      </Container>
    </>
  );
};
export default RegistrationPage;
