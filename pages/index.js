import { useState } from "react";
import Homepage from "../components/HomePage/index";
import MissionPage from "../components/MissionPage";
import TaskBoardPage from "../components/MissionPage/taskboard";
import PendingPage from "../components/MissionPage/pending";
<<<<<<< HEAD

import Top20 from "../components/ShareComponents/scoreboard"
import Taskboard from "../components/ShareComponents/taskboard"
import Pending from "../components/ShareComponents/pending_board"
import Done from "../components/ShareComponents/done"
import Giftcode from "../components/ShareComponents/giftcode"
import Cam_manager from "../components/ShareComponents/cam_manager"
import Exchange from "../components/ShareComponents/exchange";

=======
import DonePage from "../components/MissionPage/done";
>>>>>>> 2f894cc163746cfa60b8b69f4c4c4910103608c1
export default function Home() {
  return(
    <div>
<<<<<<< HEAD
      <Top20 />
      <Taskboard />
      <Pending />
      <Done />
      <Giftcode />
      <Cam_manager />
      <Exchange />
=======
      {currPage == "" && (
        <Homepage setUser={setUser} user={user} setCurrPage={setCurrPage} />
      )}
      {currPage == "SCOREBOARD" && (
        <MissionPage
          setUser={setUser}
          user={user}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      )}
      {currPage == "TASKBOARD" && (
        <TaskBoardPage
          setUser={setUser}
          user={user}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      )}

      {currPage == "PENDING" && (
        <PendingPage
          setUser={setUser}
          user={user}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      )}
      {
        currPage == "DONE" && (
          <DonePage
            setUser={setUser}
            user={user}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />)
      }
>>>>>>> 2f894cc163746cfa60b8b69f4c4c4910103608c1
    </div>
  )
  // const [user, setUser] = useState({
  //   userName: "",
  //   password: "",
  //   email: "",
  //   _id: -1,
  // });

  // const [currPage, setCurrPage] = useState("");

  // return (
  //   <div>
  //     {currPage == "" && (
  //       <Homepage setUser={setUser} user={user} setCurrPage={setCurrPage} />
  //     )}
  //     {currPage == "SCOREBOARD" && (
  //       <MissionPage
  //         setUser={setUser}
  //         user={user}
  //         setCurrPage={setCurrPage}
  //         currPage={currPage}
  //       />
  //     )}
  //     {currPage == "TASKBOARD" && (
  //       <TaskBoardPage
  //         setUser={setUser}
  //         user={user}
  //         setCurrPage={setCurrPage}
  //         currPage={currPage}
  //       />
  //     )}

  //     {currPage == "PENDING" && (
  //       <PendingPage
  //         setUser={setUser}
  //         user={user}
  //         setCurrPage={setCurrPage}
  //         currPage={currPage}
  //       />
  //     )}
  //   </div>
  // );
}
