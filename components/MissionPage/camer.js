import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
// import Exchange from "../ShareComponents/exchange";
// import Giftcode from "../ShareComponents/giftcode";
import Cam_manager from "../ShareComponents/cam_manager";
import Style from "../../styles/bg.module.css";
export default function CamManagerPage({ setUser, user, setCurrPage, currPage }) {
    return (
        <div className=" flex flex-col h-screen w-screen">
          <div
            style={{
              height: "80px",
            }}
          >
            <HeaderPage user={user} setIsLogin={() => {}} setIsRegis={() => {}} />;
          </div>
          <div className=" flex  h-full">
            <div className="w-1/6">
              <Sidebar setCurrPage={setCurrPage} currPage={currPage} user={user} />
            </div>
            <div className={Style.bg_full}>
              <Cam_manager/>
            </div>
          </div>
        </div>
      );
}

