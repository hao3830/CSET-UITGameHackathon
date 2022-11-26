import Style from '../../styles/done.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
export default function Done() {
    return (
        <div className={Style.top20}>
            <div className={Style.top20_header}>
                <p>DONE</p>
            </div>
            <div className={Style.top20_tieuchi}>
                <div className={Style.top20_tieuchi_left}>
                    <h1><AiOutlineCaretDown /></h1>
                    <div className={Style.seperator}></div>
                    <p>POSITION</p>
                </div>
                <div className={Style.top20_tieuchi_right}>
                    <p>STATUS</p>
                </div>
            </div>
            <div className={Style.top20_info}>
                <div className={Style.top20_info_left}>
                    <h1><GoPrimitiveDot /></h1>
                    <p>Điền tên vô đây</p>
                </div>
                <div className={Style.top20_info_right}>
                    <p>DONE</p>
                </div>
            </div>
        </div>
    )
}