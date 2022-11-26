import Style from '../../styles/done.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { handleGetDoneTask } from '../../APIs/mission'
export default function Done({userLogin}) {
    const [doneList, setDoneList] = useState()
    const handleGetPendingData = async () => {
        const respone = await handleGetDoneTask({ user_id: userLogin._id });
        console.log(respone)
        if (respone) setDoneList(respone);
      };

      useEffect(()=> {
        handleGetPendingData()
      },[])

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
            {
                doneList && doneList.map((item, idx) => {
                    return (
                        <div className={Style.top20_info}>
                <div className={Style.top20_info_left}>
                    <h1><GoPrimitiveDot /></h1>
                    <p>{`${item.location_desc}`}</p>
                </div>
                <div className={Style.top20_info_right}>
                    <p>DONE</p>
                </div>
            </div>
                    );
                })
            }
            
        </div>
    )
}