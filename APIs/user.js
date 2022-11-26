import { toast } from "react-toastify";
import axios from './axios_instance'
const getLogin = async ({ userName, password }) => {
  try {
    const response = await axios.get("/user", {
      params: {
        user_name: userName,
        password: password,
      },
    });

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("Wrong username or password");
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const handleRegister = async ()=> {

}

export { getLogin };
