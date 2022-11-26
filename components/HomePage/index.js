import HeaderPage from '../../components/HomePage/header.js'
import Start from '../../components/HomePage/start.js'
import What from '../../components/HomePage/whatPart.js'
import Funct from '../../components/HomePage/function.js'
import Part from '../../components/HomePage/3Part.js'
import End from '../../components/HomePage/end.js'
import Style from '../../styles/main.module.css'
export default function Homepage()
{
    return(
        <div className={Style.main}>
            <p className={Style.main_chunen}></p>
            <HeaderPage />;
            <Start />;
            <What />;
            <Funct />;
            <Part />;
            <End />;
        </div>
    )
}