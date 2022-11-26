import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
import Done from "../ShareComponents/done";
import Style from "../../styles/bg.module.css";
export default function DonePage({ setUser, user, setCurrPage, currPage }) {
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
              <Sidebar setCurrPage={setCurrPage} currPage={currPage} />
            </div>
            <div className={Style.bg_full}>
              <Done userLogin={user} />
            </div>
          </div>
        </div>
      );
}
