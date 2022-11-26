import { useEffect, useState } from "react";
import Style from "../../styles/exchange.module.css";
import { handleChangeItem, getLogin } from "../../APIs/user";

export default function Exchange({ userLogin, setUser }) {
  const [giftType, setGiftType] = useState();
  const [check, setCheck] = useState(-1);
  const [popUp, setPopUp] = useState(false);
  const [gifts, setGifts] = useState();
  const handleClickChange = async () => {
    const respone = await handleChangeItem({
      type_gift: giftType,
      user_id: userLogin._id,
    });

    if (respone) {
      setGifts(respone);
      setPopUp(true);

      const res = await getLogin({
        userName: userLogin.userName,
        password: userLogin.password,
      });
      if (res) {
        setUser({
          userName: res.name,
          password: res.password,
          email: res.email,
          _id: res._id,
          score: res.score,
        });
      }
    }
  };
  const handlLogin = async () => {
    const res = await getLogin({
      userName: userLogin.userName,
      password: userLogin.password,
    });
    if (res) {
      setUser({
        userName: res.name,
        password: res.password,
        email: res.email,
        _id: res._id,
        score: res.score,
      });
    }
  }
  
  useEffect(()=> {
    handlLogin()
  },[])

  return (
    <div className={Style.exchange}>
      {popUp && gifts && (
        <div
          className=" w-screen h-screen bg-black opacity-50 absolute top-0 left-0"
          onClick={() => {
            setPopUp(false);
            setGifts(undefined);
          }}
        ></div>
      )}
      {popUp && gifts && (
        <div
          className=" w-screen h-screen flex  justify-center absolute top-0 left-0 items-center "
          onClick={() => {
            setPopUp(false);
            setGifts(undefined);
          }}
        >
          <div className="text-green-500 rounded-xl bg-white w-1/2 h-1/2 flex justify-center items-center">
            <p className=" text-2xl">Your Code is:</p>
            <p className=" text-2xl text-black"> {gifts.code}</p>
          </div>
        </div>
      )}
      <div className={Style.diem}>
        <p>Điểm: </p>
        <p>{userLogin.score} </p>
      </div>
      <div>
        <label className={Style.checkbox}>
          <input
            className={Style.checkbox_check}
            checked={check == 0}
            onChange={(e) => {
              if (check == 0) {
                setCheck(-1);
                return;
              }
              setCheck(0);
              setGiftType("PhoneCard");
            }}
            type="checkbox"
          ></input>
          <p> PhoneCard</p>
          <p> (50 Points/Card)</p>
        </label>
        <label className={Style.checkbox}>
          <input
            className={Style.checkbox_check}
            checked={check == 1}
            onChange={(e) => {
              if (check == 1) {
                setCheck(-1);
                return;
              }
              setCheck(1);
              setGiftType("Voucher");
            }}
            type="checkbox"
          ></input>
          <p> Voucher</p>
          <p> (30 Points/Voucher)</p>
        </label>

        <button
          className={Style.btn}
          onClick={() => {
            handleClickChange();
          }}
        >
          Đổi
        </button>
      </div>
    </div>
  );
}
