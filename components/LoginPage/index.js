import styles from "../../styles/login.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { getLogin } from "../../APIs/user";
import Loading from "../ShareComponents/loading";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async () => {
    setIsPending(true);
    const respone = await getLogin({
      userName: userName,
      password: password,
    });
    if (respone) {
      toast.success("Login Success");
      
    }
    setIsPending(false);
  };
  return (
    <div className={styles.login}>
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
            type="text"
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
