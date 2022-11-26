import HeaderPage from "../../components/HomePage/header.js";
import Start from "../../components/HomePage/start.js";
import What from "../../components/HomePage/whatPart.js";
import Funct from "../../components/HomePage/function.js";
import Part from "../../components/HomePage/3Part.js";
import End from "../../components/HomePage/end.js";
import Style from "../../styles/main.module.css";
import { useState } from "react";

export default function Homepage() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={Style.main}>
      <p className={Style.main_chunen}>CSET</p>
      <HeaderPage />;
      <Start />;
      <What />;
      <Funct />;
      <Part />;
      <End />;

    </div>
  );
}
