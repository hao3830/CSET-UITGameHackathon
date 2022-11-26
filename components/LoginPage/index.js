import styles from "../../styles/login.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { getLogin } from "../../APIs/user";
import Loading from "../ShareComponents/loading";

const Login = ({ setIsLogin, setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async () => {
    setIsPending(true);
    if (!userName) {
      toast.error("Please fill username");
      setIsPending(false);

      return;
    }
    if (!password) {
      toast.error("Please fill password");
      setIsPending(false);
      return;
    }
    const respone = await getLogin({
      userName: userName,
      password: password,
    });
    if (respone) {
      toast.success("Login Success");
      setIsLogin(false);
      setUser({
        userName: respone.name,
        password: respone.password,
        email: respone.email,
      });
    }
    setPassword("");
    setUserName("");
    setIsPending(false);
  };
  return (
    <div className=" fixed top-0 left-0 align-middle flex justify-center z-50 w-screen h-screen items-center ">
      <div
        className="w-full h-full bg-black opacity-50 absolute top-0 left-0 hover:cursor-pointer"
        onClick={() => setIsLogin(false)}
      ></div>
      <div className={styles.login_container}>
        <div className={styles.login_close}>
          <FaRegWindowClose />
        </div>
        <header className={styles.login_header}>
          <span className={styles.login_text}>welcome</span>
          <span>back</span>
        </header>

        <div className={styles.login_body}>
          <input
            type="text"
            className={styles.login_input}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username*"
          ></input>

          <input
            type="password"
            className={styles.login_input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password*"
          ></input>

          <button
            className={styles.login_click}
            onClick={() => {
              handleLogin();
            }}
          >
            {" "}
            {isPending ? <Loading /> : "Login"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
