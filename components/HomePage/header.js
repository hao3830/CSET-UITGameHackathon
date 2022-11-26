import Style from "../../styles/header.module.css";
export default function HeaderPage() {
  const handleClickLogin = () => {};
  return (
    <div className={Style.header_bar}>
      <p className={Style.img_header}></p>
      <div className={Style.signup_login}>
        <a
          href=""
          className={Style.setSignup}
          onClick={() => handleClickLogin()}
        >
          Sign Up
        </a>
        <a
          href=""
          className={Style.setLogin}
          onClick={() => handleClickLogin()}
        >
          Login
        </a>
      </div>
    </div>
  );
}
