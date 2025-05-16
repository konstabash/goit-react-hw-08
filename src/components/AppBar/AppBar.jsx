import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import AppBarUi from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarUi position="static">
        <Toolbar className={s.toolbar}>
          <Typography variant="h6" component="div">
            <Navigation />
          </Typography>
          <Typography variant="h6" component="div">
            {!isLoggedIn && <AuthNav />}
            {isLoggedIn && <UserMenu />}
          </Typography>
        </Toolbar>
      </AppBarUi>
    </Box>
  );
};
export default AppBar;
