import Style from '../../styles/start.module.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { useState } from "react";
export default function Start({ user, setIsLogin }) {
    const [i, doii] = useState(0);
    const images = [
        {
            url: '/env.png'
        },
        {
            url: '/connect.png'
        },
        {
            url: '/ex.png'
        },
        {
            url: '/hh.png'
        },
        {
            url: '/livingbetter.png'
        },

    ];
    function chuyen(x) {
        doii(x);
    }
    
    return (
        <div className={Style.start}>
            <div className={Style.start_left}>
                <h1>Go green</h1>
                <p>Let's go to be a green person.
                    You will be connected with others to create a green community.
                    Together we will create a green Earth.</p>
                <a href="" onClick={(e) => {
                    e.preventDefault()
                    if(!user.userName) {
                        setIsLogin(true)
                    }
                }}>Start</a>
                <div className={Style.start_right}>
                    <div className={Style.start_right_top}>
                        <img src={`${images[i].url}`}></img>
                        <div className={Style.btn}>
                            <button className={Style.btnye} onClick={() => chuyen(0)}><GoPrimitiveDot /></button>
                            <button className={Style.btnye} onClick={() => chuyen(1)}><GoPrimitiveDot /></button>
                            <button className={Style.btnye} onClick={() => chuyen(2)}><GoPrimitiveDot /></button>
                            <button className={Style.btnye} onClick={() => chuyen(3)}><GoPrimitiveDot /></button>
                            <button className={Style.btnye} onClick={() => chuyen(4)}><GoPrimitiveDot /></button>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    )
}