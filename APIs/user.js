import { toast } from "react-toastify";
import axios from "./axios_instance";
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
    return data.user;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const getRegister = async ({ userName, email, password }) => {
  try {
    const formData = new FormData();
    formData.append("user_name", userName);
    formData.append("email", email);
    formData.append("password", password);

    const response = await axios.post("/user/register", formData);

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("UserName already use");
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const getTop20User = async () => {
  try {
    const response = await axios.get("/user/list_user");

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("Error in database");
      return false;
    }
    return data.users;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const handleChangeItem = async ({type_gift, user_id}) => {
  try {
    const response = await axios.get("/user/get_a_avail_type_gift",{
      params:{
        type_gift:type_gift,
        user_id:user_id
      }
    });

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("There No Gift");
      return false;
    }
    return data.gifts;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
}


export { getLogin, getRegister, getTop20User, handleChangeItem };
