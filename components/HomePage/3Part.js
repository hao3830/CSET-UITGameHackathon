import Style from '../../styles/3part.module.css'
export default function Part() {
    return (
        <div className={Style.part}>
            <div className={Style.part_left}>
                
                <p className={Style.part_img1}></p>
                <p>Lorem ipsum dolor sit amet consectetur. Quam massa quisque quam erat. Leo semper accumsan pretium arcu dictum a malesuada. Scelerisque sit enim tincidunt fermentum maecenas sed vitae adipiscing.</p>
            </div>
            <div className={Style.part_center}>
                <p className={Style.part_img2}> </p>
                <p>Lorem ipsum dolor sit amet consectetur. Quam massa quisque quam erat. Leo semper accumsan pretium arcu dictum a malesuada. Scelerisque sit enim tincidunt fermentum maecenas sed vitae adipiscing.</p>
            </div>
            <div className={Style.part_right}>
                <p className={Style.part_img3}></p>
                <p>Lorem ipsum dolor sit amet consectetur. Quam massa quisque quam erat. Leo semper accumsan pretium arcu dictum a malesuada. Scelerisque sit enim tincidunt fermentum maecenas sed vitae adipiscing.</p>
            </div>

        </div>
    )
}