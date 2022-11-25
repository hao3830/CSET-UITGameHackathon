import Style from '../../styles/slider_images.module.css'
import { useState } from 'react'
import { FaDotCircle } from "react-icons/fa";
function Image_Gallery() {
    const [i, doii] = useState(0)
    const [idx, setIdx] = useState(0)
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
   
   
   
    return (
        <div className={Style.bao}>


            <div className={Style.btn}>
                <img style={{ width: "100%" }} src={`${images[i].original}`}></img>
                {images.map((images, index) => {

                    return idx == index ?
                        <button className={Style.btnset} onClick={() => { setIdx(index), doii(index) }}><FaDotCircle /></button>
                        : <button className={Style.btnye} onClick={() => { setIdx(index), doii(index) }}><FaDotCircle /></button>
                })}
            </div>
        </div>

    );
}
export default Image_Gallery