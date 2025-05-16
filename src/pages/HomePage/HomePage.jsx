import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.background}></div>
      <h1 className={s.title}>Welcome Page!</h1>
    </div>
  );
};
export default HomePage;
