// import { useEffect, useState } from "react";
// import { getUserPendingList } from "../../APIs/mission";
// import { handleReportCompletedTask } from "../../APIs/mission";
// const PendingBoard = ({ userLogin }) => {
//   const [pendingData, setPendingData] = useState();

//   const handleGetPendingData = async () => {
//     const respone = await getUserPendingList({ user_id: userLogin._id });

//     if (respone) setPendingData(respone);
//   };

//   useEffect(() => {
//     handleGetPendingData();
//   }, []);

//   return (
//     <div>
//       <div className="text-center text-2xl font-bold text-green-500">
//         Pending
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
//             {pendingData &&
//               pendingData.map((item, idx) => {
//                 return (
//                   <tr className=" ">
//                     <th>{idx + 1}</th>
//                     <td>{item.location_desc}</td>
//                     <td></td>

//                     <td className="flex justify-start items-center text-red-500">
//                       Pending
//                     </td>
//                     <td
//                       className=" text-green-500 font-bold hover:cursor-pointer"
//                       onClick={() => {
//                         handleReportCompletedTask()
//                       }}
//                     >
//                       Completed Report
//                     </td>
//                   </tr>
//                 );
//               })}
//             {/* <tr className=" ">
//                   <th>{idx + 1}</th>
//                   <td className={` ${item.name == userLogin.name && ' text-green-500'}`}>{item.name}</td>
//                   <td></td>

//                   <td className="flex justify-start items-center">
//                   {item.score}{" "}
//                     <img
//                       src="/leaf.png"
//                       className=" ml-2"
//                       width={20}
//                       height={20}
//                     />
//                   </td>
//                   <td></td>
//                 </tr> */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PendingBoard;

import Style from '../../styles/pending.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
export default function Pending() {
    return (
        <div className={Style.top20}>
            <div className={Style.top20_header}>
                <p>PENDING</p>
            </div>
            <div className={Style.top20_tieuchi}>
                <div className={Style.top20_tieuchi_left}>
                    <h1><AiOutlineCaretDown /></h1>
                    <div className={Style.seperator}></div>
                    <p>POSITION</p>
                </div>
                <div className={Style.top20_tieuchi_right}>
                    <p>JOINER</p>
                    <p>STATUS</p>
                </div>
            </div>
            <div className={Style.top20_info}>
                <div className={Style.top20_info_left}>
                    <h1><GoPrimitiveDot /></h1>
                    <p>Điền tên vô đây</p>
                </div>
                <div className={Style.top20_info_right}>
                    <p>5/5</p>
                    <p>pending</p>
                    <p>CONFIRM</p>
                </div>
            </div>
        </div>
    )
}