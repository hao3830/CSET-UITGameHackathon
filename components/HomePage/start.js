import Style from '../../styles/start.module.css'
import { GoPrimitiveDot } from 'react-icons/go';
export default function Start() {
    return (
        <div className={Style.start}>
            <div className={Style.start_left}>
                <h1>Go green</h1>
                <p>Let's go to be a green person.
You will be connected with others to create a green community.
Together we will create a green Earth.</p>
                <a href="">Start</a>
                <div className={Style.start_right}>
                <div className={Style.start_right_top}></div>
                <div className={Style.start_right_dot}>
                    <a href=""><GoPrimitiveDot /> </a>
                    <a href=""><GoPrimitiveDot /> </a>
                    <a href=""><GoPrimitiveDot /> </a>
                    <a href=""><GoPrimitiveDot /> </a>
                    <a href=""><GoPrimitiveDot /> </a>
                </div>
            </div>
            </div>
            


        </div>

    )
}