import Style from '../../styles/end.module.css'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineYoutube, AiOutlineGithub } from 'react-icons/ai'
export default function End() {
    return (
        <div className={Style.end}>
            <div className={Style.end_logo}>
            </div>
            <div className={Style.end_button}>
                <a href=""><AiOutlineMail /></a>
                <a href=""><AiOutlineGithub /></a>
                <a href=""><AiOutlineFacebook /></a>
                <a href=""><AiOutlineYoutube /></a>
            </div>
            <div>
                <p className={Style.end_contact}>CONTACT US</p>
            </div>
            <div className={Style.end_gach1}> </div>
            <div className={Style.end_gach2}> </div>
        </div>
    )
}