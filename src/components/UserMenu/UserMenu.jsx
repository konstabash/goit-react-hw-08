import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { Button } from "@mui/material";

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <span>Welcome, {userName}</span>
      <Button
        variant="outlined"
        color="white"
        onClick={() => dispatch(logoutThunk())}
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "#d50000",
            color: "#fafafa",
            borderColor: "#1976d2",
          },
        }}
      >
        Log Out
      </Button>
    </div>
  );
};
export default UserMenu;
