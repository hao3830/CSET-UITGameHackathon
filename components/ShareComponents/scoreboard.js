import { useEffect, useState } from "react";
import { getTop20User } from "../../APIs/user";

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
    <div>
      <div className="text-center text-2xl font-bold text-green-500">
        TOP 20
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className=" text-green-500 ">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th></th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((item, idx) => {
              return (
                <tr className=" ">
                  <th>{idx + 1}</th>
                  <td className={` ${item.name == userLogin.name && ' text-green-500'}`}>{item.name}</td>
                  <td></td>

                  <td className="flex justify-start items-center">
                  {item.score}{" "}
                    <img
                      src="/leaf.png"
                      className=" ml-2"
                      width={20}
                      height={20}
                    />
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreBoard;
