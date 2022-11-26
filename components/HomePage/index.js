import HeaderPage from '../../components/HomePage/header.js'
import Start from '../../components/HomePage/start.js'
import What from '../../components/HomePage/whatPart.js'
import Funct from '../../components/HomePage/function.js'
import Part from '../../components/HomePage/3Part.js'
import End from '../../components/HomePage/end.js'
import Style from '../../styles/main.module.css'
import { useState } from 'react'
import Login from '../LoginPage/index.js'
import Register from '../LoginPage/register.js'

export default function Homepage({setUser, user , setCurrPage})
{
    const [isLogin, setIsLogin] = useState(false);
    const [isRegis, setIsRegis] = useState(false);
    return(
        <div className={Style.main}>
            <p className={Style.main_chunen}>CSET</p>
            <HeaderPage user={user} setIsLogin={setIsLogin} setIsRegis={setIsRegis} />;
            <Start user={user} setIsLogin={setIsLogin} setCurrPage={setCurrPage} />;
            <What />;
            <Funct />;
            <Part />;
            <End />;
            {isLogin && <Login setIsLogin={setIsLogin} setUser={setUser} />}
            {isRegis && <Register setIsRegis={setIsRegis} setUser={setUser}/>}
        </div>
    )
}
