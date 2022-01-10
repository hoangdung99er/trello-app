import axios from "axios";
import { API_ROOT } from "@/utils/constansts";

export const fetchBoardDetails = async (id) => {
  try {
    const request = await axios.get(`${API_ROOT}/v1/boards/${id}`);

    return request.data;
  } catch (error) {
    console.log(error);
  }
};
