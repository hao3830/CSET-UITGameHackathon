import Style from '../../styles/end.module.css'

import { AiOutlineMail, AiOutlineFacebook, AiOutlineYoutube, AiOutlineGithub } from 'react-icons/ai'
export default function End() {
    return (
        <div className={Style.end}>
            <div className={Style.end_logo}>
                <a><img src={"gogreen.png"}></img></a>
            </div>
            <div className={Style.end_center}>
                <div className={Style.end_button}>
                <a href=""><AiOutlineMail /></a>
                <a href=""><AiOutlineGithub /></a>
                <a href=""><AiOutlineFacebook /></a>
                <a href=""><AiOutlineYoutube /></a>
                </div>

                <div>
                <p className={Style.end_contact}>CONTACT US</p>
                </div>
            </div>
            
            <img src={"logo.png"} className={Style.end_img}></img>
        </div>
    )
}