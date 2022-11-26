import { useState } from "react";
import Homepage from "../components/HomePage/index";
import MissionPage from "../components/MissionPage";
import TaskBoardPage from "../components/MissionPage/taskboard";
import PendingPage from "../components/MissionPage/pending";
import DonePage from "../components/MissionPage/done";
import GiftPage from "../components/MissionPage/gift";
export default function Home() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
    _id: -1,
    score: 0
  });

  const [currPage, setCurrPage] = useState("");

  return (
    <div>
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
       {
        currPage == "GIFT" && (
          <GiftPage
            setUser={setUser}
            user={user}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />)
      }
      {
        currPage == "GIFT-BOARD" && user.userName =='admin'  && (
          <GiftPage
            setUser={setUser}
            user={user}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />)
      }
      {
        currPage == "CAMERA" && user.userName =='admin'  && (
          <GiftPage
            setUser={setUser}
            user={user}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />)
      }
    </div>
  );
}