import Style from "../../styles/header.module.css";
export default function HeaderPage({ setIsLogin, setIsRegis }) {
  return (
    <div className={Style.header_bar}>
      <p className={Style.img_header}></p>
      <div className={Style.signup_login}>
        <a
          href=""
          className={Style.setSignup}
          onClick={(e) => {
            e.preventDefault();
            setIsRegis(true);
          }}
        >
          Sign Up
        </a>
        <a
          href=""
          className={Style.setLogin}
          onClick={(e) => {
            e.preventDefault();

            setIsLogin(true);
          }}
        >
          Login
        </a>
      </div>
    </div>
  );
}
