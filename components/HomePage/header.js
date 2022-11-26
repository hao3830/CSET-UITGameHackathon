import Style from "../../styles/header.module.css";
export default function HeaderPage({ user, setIsLogin, setIsRegis }) {
  return (
    <div className={Style.header_bar}>
      <p className={Style.img_header}></p>
      {user.userName ? (
        <span className=" text-white text-lg pr-32">
          Hi <span className=" text-green-500">{user.userName}</span>
        </span>
      ) : (
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
      )}
    </div>
  );
}
