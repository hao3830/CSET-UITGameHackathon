import Sidebar from "../ShareComponents/side_bar";
import HeaderPage from "../HomePage/header";
import TaskBoard from "../ShareComponents/taskboard";
<<<<<<< HEAD
import Style from "../../styles/bg.module.css";
=======
import styles from "../../styles/fix_task.module.css"

>>>>>>> 3d327adcb4f1f9630eae29088feed505821222c7
const TaskBoardPage = ({ setUser, user, setCurrPage, currPage }) => {
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
        <div className={Style.bg_full}>
          <TaskBoard user={user} />
        </div>
      </div>
    </div>
  );
};

export default TaskBoardPage;
