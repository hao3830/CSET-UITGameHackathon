import Style from '../../styles/camera_manager.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
export default function Cam_manager() {
    return (
        
        <div className={Style.top20}>
            <div className={Style.input}>
                    <div clasName={Style.input1}>
                        <div className={Style.input_type}>
                            <p>Camera Name</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                        <div className={Style.input_type}>
                            <p>Camera UserName</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                        <div className={Style.input_type}>
                            <p>Protocol</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                    </div>
                    <div clasName={Style.input1}>
                        <div className={Style.input_type}>
                            <p>Camera IP</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                        <div className={Style.input_type}>
                            <p>Camera Password</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                        <div className={Style.input_type}>
                            <p>Location</p>
                            <input className={Style.input_type_code}></input>
                        </div>
                    </div>
                <button className={Style.add_btn}>ADD</button>
            </div>
            <div className={Style.top20_header}>
                <p>ADD GIFTCODE</p>
            </div>
            <div className={Style.top20_tieuchi}>
                <div className={Style.top20_tieuchi_left}>
                    <h1><AiOutlineCaretDown /></h1>
                    <div className={Style.seperator}></div>
                    <p>CODE</p>
                </div>
                <div className={Style.top20_tieuchi_right}>
                    <p>REMOVE</p>
                </div>
            </div>
            <div className={Style.top20_info}>
                <div className={Style.top20_info_left}>
                    <h1><GoPrimitiveDot /></h1>
                    <p>Điền tên vô đây</p>
                </div>
                <div className={Style.top20_info_right}>
                    <h1><AiOutlineClose /></h1>
                </div>
            </div>
        </div>
    )
}