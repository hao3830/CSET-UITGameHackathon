import Style from '../../styles/3part.module.css'
export default function Part() {
    return (
        <div className={Style.part}>
            <div className={Style.part_menu}>
                <p className={Style.part_img1}></p>
                <p className={Style.part_content}>Friendly interface. Users can easily use it comfortably.</p>
            </div>
            <div className={Style.part_menu}>
                <p className={Style.part_img2}> </p>
                <p className={Style.part_content}>Flexible time based on personal schedule. Easily select and complete missions.</p>
            </div>
            <div className={Style.part_menu}>
                <p className={Style.part_img3}></p>
                <p className={Style.part_content}>Connecting people, creating good relationships. Together create a better environment.</p>
            </div>

        </div>
    )
}