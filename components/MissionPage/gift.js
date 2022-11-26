import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
import Exchange from "../ShareComponents/exchange";
export default function GiftPage({ setUser, user, setCurrPage, currPage }) {
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
            <div className=" w-5/6 p-2">
              <Exchange userLogin={user} setUser={setUser} />
            </div>
          </div>
        </div>
      );
}
