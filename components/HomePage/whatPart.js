import Style from '../../styles/what.module.css'
export default function What() {
    return (
        <div className={Style.what}>
            <div className={Style.what_left}>
                <h1>What is this App?</h1>
                <p>This app will provide cleaning missions for your habitat.
You will be paired with others into teams to complete missions. When completing missions, you will receive special incentives that can be applied to your life.</p>
            </div>
            <div className={Style.what_right}>
                <div className={Style.what_right_box1}></div>
                <div className={Style.what_right_box2}></div>
            </div>
        </div>
    )

}