import Style from '../../styles/header.module.css' 
export default function HeaderPage()
{
    return(
        <div className={Style.header_bar}>
            <p className={Style.img_header} ></p>
            <div className={Style.signup_login}>
                <a href = "" className={Style.setSignup}>Sign Up</a>
                <a href = "" className={Style.setLogin}>Login</a>
            </div>
        </div>
    )
}