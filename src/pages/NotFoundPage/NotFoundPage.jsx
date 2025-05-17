import React from "react";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.title}>404 Error Page</div>
      <div className={s.circles}>
        <p>
          404
          <br />
          <small>PAGE NOT FOUND</small>
        </p>
        <span className={`${s.circle} ${s.big}`}></span>
        <span className={`${s.circle} ${s.med}`}></span>
        <span className={`${s.circle} ${s.small}`}></span>
      </div>
    </section>
  );
};

export default NotFoundPage;
