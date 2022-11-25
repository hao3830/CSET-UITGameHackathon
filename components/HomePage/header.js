import Style from '../../styles/header.module.css'
export default function HeaderPage()
{
    return(
        <div className={Style.header_bar}>
            <img className={Style.img_header} src="https://assets.website-files.com/5e0a5d9d743608d0f3ea6753/5f1d8b1b9c7814aae6b69044_Daily%20Full%20logo.svg" ></img>
            <div className={Style.signup_login}>
                <a href = "" className={Style.setSignup}>Sign Up</a>
                <a href = "" className={Style.setLogin}>Login</a>
            </div>
        </div>
    )
}