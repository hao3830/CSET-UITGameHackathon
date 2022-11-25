import Style from '../../styles/start.module.css'
import { GoPrimitiveDot } from 'react-icons/go';
export default function Start() {
    return (
        <div className={Style.start}>
            <div className={Style.start_left}>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ut massa nisl pulvinar id ac volutpat. Arcu auctor fusce tincidunt quis diam risus nisl platea ipsum. Suspendisse scelerisque turpis quis sed etiam fames quis. Praesent vestibu</p>
                <a href="../../source.logo.png">Start</a>

            </div>
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

    )
}