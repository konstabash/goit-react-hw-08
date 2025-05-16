import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
  });

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box marginTop="64px">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            <Form>
              <Box>
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                />
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid className="footer">
                  <Typography component="h5">
                    Don't have an account yet?{" "}
                    <Link href="/register">Sign Up</Link>
                  </Typography>
                </Grid>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Container>
    </>
  );
};
export default LoginPage;
