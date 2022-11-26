import Style from "../../styles/exchange.module.css"
export default function Exchange()
{
    return(
        <div className={Style.exchange}>
            <div className={Style.diem}>
                <p>Điểm: </p> 
                <p>1000  </p>
            </div>
            <div>
                <label className={Style.checkbox}>
                    <input className={Style.checkbox_check} type="checkbox"></input>
                    <p> PhoneCard</p>   
                    <p> (50 Points/Card)</p>
                </label>
                <label className={Style.checkbox}>
                    <input className={Style.checkbox_check} type="checkbox"></input>
                    <p> Voucher</p>   
                    <p> (30 Points/Voucher)</p>
                </label>

                <button className={Style.btn}>Đổi</button>       
            </div>
        </div>
    )
}   