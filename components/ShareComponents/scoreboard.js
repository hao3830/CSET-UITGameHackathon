// import { useEffect, useState } from "react";
// import { getTop20User } from "../../APIs/user";

// const ScoreBoard = ({ userLogin }) => {
//   const [users, setUsers] = useState();

//   const handleGetTop20User = async () => {
//     const response = await getTop20User();

//     setUsers(response);
//   };

//   useEffect(() => {
//     handleGetTop20User();
//   }, []);

//   return (
//     <div>
//       <div className="text-center text-2xl font-bold text-green-500">
//         TOP 20
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table w-full ">
//           <thead className=" text-green-500 ">
//             <tr>
//               <th>Rank</th>
//               <th>Name</th>
//               <th></th>
//               <th>Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users && users.map((item, idx) => {
//               return (
//                 <tr className=" ">
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
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ScoreBoard;
import { useEffect, useState } from "react";
import { getTop20User } from "../../APIs/user";

import Style from '../../styles/top20.module.css'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineCaretDown } from 'react-icons/ai'
const ScoreBoard = ({ userLogin }) => {
    const [users, setUsers] = useState();
  
    const handleGetTop20User = async () => {
      const response = await getTop20User();
  
      setUsers(response);
    };
  
    useEffect(() => {
      handleGetTop20User();
    }, []);
    return (
        <div className={Style.top20}>
            <div className={Style.top20_header}>
                <p>Top20</p>
            </div>
            <div className={Style.top20_tieuchi}>
                <div className={Style.top20_tieuchi_left}>
                    <h1><AiOutlineCaretDown /></h1>
                    <div className={Style.seperator}></div>
                    <p>Name</p>
                </div>

                <p>Points</p>
            </div>
            {users && users.map((item, idx) => {
                return (
                    <div className={Style.top20_info}>
                        <div className={Style.top20_info_left}>
                            <h1><GoPrimitiveDot /></h1>
                            <p className={` ${item.name == userLogin.name && ' text-green-500'}`}>{item.name}</p>
                        </div>
                        <div className={Style.top20_info_right}>
                            <p>{item.score}</p>
                            <p><img src="leaf.png"></img></p>
                        </div>


                    </div>
                );
            })
            }
            

        </div>
    )
}

export default ScoreBoard;