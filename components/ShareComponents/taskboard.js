
// const TaskBoard = ({ user }) => {
//   const [missions, setMissions] = useState();
//   const [taskStatus, setTaskStatus] = useState([]);
//   const handleGetNoneCompleteMission = async () => {
//     const respone = await getNoneCompleteMission({ user_id: user._id });
//     if (respone) setMissions(respone);
//   };

//   useEffect(() => {
//     handleGetNoneCompleteMission();
//   }, []);

//   return (
//     <div>
//       <div className="text-center text-2xl font-bold text-green-500">
//         TASKBOARD
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table w-full ">
//           <thead className=" text-green-500 ">
//             <tr>
//               <th>STT</th>
//               <th>POSITION</th>
//               <th></th>
//               <th>STATUS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {missions &&
//               missions.map((item, idx) => {
//                 return (
//                   <tr className="" key={idx}>
//                     <th>{idx + 1}</th>
//                     <td>{item.location_desc}</td>
//                     <td></td>
//                     <td className="flex justify-start items-center">
//                       {item.mission_time.replace("T", " ")}
//                     </td>
//                     <td
//                       className={`text-green-500  ${!taskStatus.find((item) => item == idx)
//                         ? "hover:cursor-pointer"
//                         : " opacity-50"
//                         }`}
//                       onClick={(e) => {
//                         if (taskStatus.find((item) => item == idx)) return;
//                         handleInsertJoiner({
//                           user_id: user._id,
//                           mission_id: item._id,
//                         });
//                         setTaskStatus([...taskStatus, idx]);
//                       }}
//                     >
//                       {!taskStatus.find((item) => item == idx)
//                         ? "JOIN"
//                         : "JOINED"}
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;


import { useEffect, useState } from "react";
import { getNoneCompleteMission, handleInsertJoiner } from "../../APIs/mission";

import Style from '../../styles/taskboard.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
export default function Taskboard({user}) {
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
    <div className={Style.top20}>
      <div className={Style.top20_header}>
        <p>TASKBOARD</p>

      </div>
      <div className={Style.top20_tieuchi}>
        <div className={Style.top20_tieuchi_left}>
          <h1><AiOutlineCaretDown /></h1>
          <div className={Style.seperator}></div>
          <p>POSITION</p>
        </div>
        <p>Task score</p>
        <p>Date Assigned</p>
      </div>
      {missions &&
        missions.map((item, idx) => {
          return ( 
            <div>
              <div className={Style.top20_info}>
                <div className={Style.top20_info_left}>
                  <h1><GoPrimitiveDot /></h1>
                  <p>{ `${item.location_desc}` }</p>
                </div>
                <p>{`${item.misson_score}`}</p>
                <div className={Style.top20_info_right}>
                  <p >{item.mission_time.replace('T', ' ')}</p>
                  <a  
                  className={`${taskStatus.find((item) => item == idx) == undefined? '':'opacity-50'}`}
                  onClick={(e)=> {
                    e.preventDefault()
                    if (taskStatus.find((item) => item == idx) ) return;
                        handleInsertJoiner({
                          user_id: user._id,
                          mission_id: item._id,
                        });
                        setTaskStatus([...taskStatus, idx]);
                  }}> {taskStatus.find((item) => item == idx) == undefined
                                            ? "JOIN"
                                            : "JOINED"}</a>
                </div>
              </div>




            </div>);
        })}
    </div>



  )
}