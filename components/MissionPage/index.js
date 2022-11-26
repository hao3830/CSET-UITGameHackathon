import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
import ScoreBoard from "../ShareComponents/scoreboard";
import Style from "../../styles/bg.module.css";
const MissionPage = ({ setUser, user, setCurrPage, currPage }) => {
  return (
    // <div className=" flex flex-col h-screen w-screen" style="background-image: url('../../pages/public/bgpic_1.png')">
    <div className={Style.bg} >
    <div
        style={{
          height: "80px",
        }}
      >
        <HeaderPage user={user} setIsLogin={() => {}} setIsRegis={() => {}} />;
      </div>
      <div className=" flex  h-full">
        <div className="w-1/6">
          <Sidebar setCurrPage={setCurrPage} currPage={currPage} />
        </div>
        <div className={Style.bg_full}>
          <ScoreBoard userLogin={user} />
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
