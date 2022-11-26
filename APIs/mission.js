import { toast } from "react-toastify";
import axios from "./axios_instance";

const getNoneCompleteMission = async ({ user_id }) => {
  try {
    const response = await axios.get("/mission/all_task_pending_of_user", {
      params: {
        user_id: user_id,
      },
    });

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("Database have errror");
      return false;
    }
    return data.missions;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const handleInsertJoiner = async ({ user_id, mission_id }) => {
  try {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("mission_id", mission_id);

    const response = await axios.get("/mission/join_task", {
      params: {
        user_id: user_id,
        mission_id,
      },
    });

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

    return true;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const getUserPendingList = async ({ user_id }) => {
  try {
    const response = await axios.get("/mission/pending_task", {
      params: {
        user_id: user_id,
      },
    });

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

    return data.missions;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const handleReportCompletedTask = async ({ user_id, mission_id }) => {
  try {
    const response = await axios.get("/mission/completed", {
      params: {
        user_id: user_id,
        mission_id: mission_id,
      },
    });

    if (response.status != 200) {
      toast.error("Have error when get data, please try again");
      return false;
    }

    const data = response.data;

    if (data.code != 1000) {
      console.log(data);
      toast.error("Task Uncompleted");
      return false;
    }

    toast.success("Task Completed");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
};

const handleGetDoneTask = async ({user_id}) => {
  try {
    const response = await axios.get("/mission/done", {
      params: {
        user_id: user_id,
      },
    });

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

    return data.missions;
  } catch (error) {
    console.log(error);
    toast.error("Have error when get data, please try again");
    return false;
  }
}

export {
  getNoneCompleteMission,
  handleInsertJoiner,
  getUserPendingList,
  handleReportCompletedTask,
  handleGetDoneTask
};
