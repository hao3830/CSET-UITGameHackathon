import styles from '../styles/register.module.css'
import {  FaRegWindowClose } from 'react-icons/fa';

const Register = () => {
    return (
        <div className={styles.creater}>
            <div className={styles.creater_container}>
                <div className={styles.creater_close}>
                    <FaRegWindowClose/>
                </div>
                <header className={styles.creater_header}>
                    <span>creater an</span>
                    <span className={styles.creater_text}>account</span>
                </header>

                <span className={styles.creater_content}>
                    Let's get started with your 30 day free trial 
                </span>

                <div className={styles.creater_body}>
                    <input type="email" className={styles.creater_input} placeholder="Email*"></input>

                    <input type="text" className={styles.creater_input} placeholder="Usename*"></input>

                    <input type="text" className={styles.creater_input} placeholder="Passwork*"></input>

                    <input type="text" className={styles.creater_input} placeholder="Confirm Passwork*"></input>

                    <button className={styles.creater_click}> Creater an account </button>
                </div>
            </div>

            
        </div>

    )
}

export default Register 