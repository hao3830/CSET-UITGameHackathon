import { useEffect, useState } from "react";
import { getUserPendingList } from "../../APIs/mission";
import { handleReportCompletedTask } from "../../APIs/mission";
import Style from "../../styles/pending.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineCaretDown } from "react-icons/ai";
const PendingBoard = ({ userLogin }) => {
  const [pendingData, setPendingData] = useState();
  const [doneList, setDoneList] = useState([]);
  const handleGetPendingData = async () => {
    const respone = await getUserPendingList({ user_id: userLogin._id });

    if (respone) setPendingData(respone);
  };

  const handleConfirm = async ({user_id, mission_id, idx}) => {
    if (doneList.find((item) => item == idx)) return;
    const respone = await handleReportCompletedTask({
      user_id: user_id,
      mission_id: mission_id,
    });
    if (respone) {
        setDoneList([...doneList, idx]);
    }
  };
  useEffect(() => {
    handleGetPendingData();
  }, []);
  return (
    <div className={Style.top20}>
      <div className={Style.top20_header}>
        <p>PENDING</p>
      </div>
      <div className={Style.top20_tieuchi}>
        <div className={Style.top20_tieuchi_left}>
          <h1>
            <AiOutlineCaretDown />
          </h1>
          <div className={Style.seperator}></div>
          <p>POSITION</p>
        </div>
        <div className={Style.top20_tieuchi_right}>
          <p>STATUS</p>
        </div>
      </div>
      {pendingData &&
        pendingData.map((item, idx) => {
          return (
            <div className={Style.top20_info} key={idx}>
              <div className={Style.top20_info_left}>
                <h1>
                  <GoPrimitiveDot />
                </h1>
                <p>{item.location_desc}</p>
              </div>
              <div className={Style.top20_info_right}>
                <p>pending</p>
                <p
                  onClick={() => {
                    handleConfirm({
                        user_id: userLogin._id,
                        mission_id: item._id,
                        idx: idx
                      });
                  }}
                  className={`${
                    doneList.find((item) => item == idx) == undefined
                      ? "hover:cursor-pointer"
                      : "opacity-50"
                  }`}
                >
                  {doneList.find((item) => item == idx) == undefined 
                    ? "CONFIRM"
                    : "CONFIRMED"}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PendingBoard;
