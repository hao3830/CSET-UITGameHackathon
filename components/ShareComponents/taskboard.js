import { useEffect, useState } from "react";
import { getNoneCompleteMission, handleInsertJoiner } from "../../APIs/mission";

const TaskBoard = ({ user }) => {
  const [missions, setMissions] = useState();
  const [taskStatus, setTaskStatus] = useState([]);
  const handleGetNoneCompleteMission = async () => {
    const respone = await getNoneCompleteMission({ user_id: user._id });
    if (respone) setMissions(respone);
  };

  useEffect(() => {
    handleGetNoneCompleteMission();
  }, []);

  return (
    <div>
      <div className="text-center text-2xl font-bold text-green-500">
        TASKBOARD
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className=" text-green-500 ">
            <tr>
              <th>STT</th>
              <th>POSITION</th>
              <th></th>
              <th>Dates of assignments</th>
            </tr>
          </thead>
          <tbody>
            {missions &&
              missions.map((item, idx) => {
                return (
                  <tr className="" key={idx}>
                    <th>{idx + 1}</th>
                    <td>{item.location_desc}</td>
                    <td></td>
                    <td className="flex justify-start items-center">
                      {item.mission_time.replace("T", " ")}
                    </td>
                    <td
                      className={`text-green-500  ${
                        !taskStatus.find((item) => item == idx)
                          ? "hover:cursor-pointer"
                          : " opacity-50"
                      }`}
                      onClick={(e) => {
                        if (taskStatus.find((item) => item == idx)) return;
                        handleInsertJoiner({
                          user_id: user._id,
                          mission_id: item._id,
                        });
                        setTaskStatus([...taskStatus, idx]);
                      }}
                    >
                      {!taskStatus.find((item) => item == idx)
                        ? "JOIN"
                        : "JOINED"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskBoard;
