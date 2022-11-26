import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
import PendingBoard from "../ShareComponents/pending_board";
import styles from "../../styles/fix_task.module.css"

const PendingPage =  ({ setUser, user, setCurrPage, currPage }) => {
  return (
    <div className=" flex flex-col h-screen w-screen">
      <div
        style={{
          height: "80px",
        }}
      >
        <HeaderPage user={user} setIsLogin={() => {}} setIsRegis={() => {}} />;
      </div>
      <div className={styles.fix}>
        <div className="w-1/6">
          <Sidebar setCurrPage={setCurrPage} currPage={currPage} />
        </div>
        <div className=" w-5/6 p-2 ">
          <PendingBoard userLogin={user} />
        </div>
      </div>
    </div>
  );
};

export default PendingPage
 