import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { Button } from "@mui/material";

const AuthNav = () => {
  return (
    <div className={s.container}>
      <Button
        component={NavLink}
        to="/register"
        color="#fafafa"
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#1976d2",
            borderColor: "#ffffff",
          },
        }}
      >
        Sign Up
      </Button>
      <Button
        component={NavLink}
        to="/login"
        color="#fafafa"
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#1976d2",
            borderColor: "#ffffff",
          },
        }}
      >
        Log In
      </Button>
    </div>
  );
};
export default AuthNav;
