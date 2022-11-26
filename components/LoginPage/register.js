import styles from "../../styles/register.module.css";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { getRegister } from "../../APIs/user";
import Loading from "../ShareComponents/loading";

const Register = ({ setIsRegis, setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setComfirm] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleRegister = async () => {
    setIsPending(true)
    if (!userName) {
      toast.error("Please fill username");
      return;
    }
    if (!email) {
      toast.error("Please fill email");
      return;
    }
    if (!password) {
      toast.error("Please fill password");
      return;
    }
    if (!confirm) {
      toast.error("Please fill confirm");
      return;
    }
    if (password != confirm) {
      toast.error("Password not match!");
      return;
    }

    const respone = await getRegister({
      userName: userName,
      password: password,
      email: email,
    });
    if (respone) {
      toast.success("Regis Success");
      setIsRegis(false);
      setUser({
        userName: respone.name,
        password: respone.password,
        email: respone.email,
      });
    }
    setIsPending(false)
  };

  return (
    <div className={styles.creater}>
      <div
        className="w-full h-full bg-black opacity-50 absolute top-0 left-0 hover:cursor-pointer"
        onClick={() => setIsRegis(false)}
      ></div>
      <div className={styles.creater_container}>
      <img className={styles.login_img} src={'gogreen.png'}></img>
        <div className={styles.creater_close}>
          <FaRegWindowClose />
        </div>
        <header className={styles.creater_header}>
          <span>creater an</span>
          <span className={styles.creater_text}>account</span>
        </header>

        <span className={styles.creater_content}>
          Let's get started with your 30 day free trial
        </span>

        <div className={styles.creater_body}>
          <input
            type="email"
            className={styles.creater_input}
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input
            type="text"
            className={styles.creater_input}
            placeholder="Usename*"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>

          <input
            type="password"
            className={styles.creater_input}
            placeholder="Passwork*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <input
            type="password"
            className={styles.creater_input}
            value={confirm}
            onChange={(e) => setComfirm(e.target.value)}
            placeholder="Confirm Passwork*"
          ></input>

          <button
            className={styles.creater_click}
            onClick={() => handleRegister()}
          >
            {isPending ? <Loading /> : "Creater an account"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;