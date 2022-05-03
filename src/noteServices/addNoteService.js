import { token } from "../token";
import axios from "axios";
export const AddNoteHandler = async (data) => {
  try {
    const res = await axios.post(
      "/api/notes",
      {
        note: data 
      },
      {
        headers: { authorization: token }
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};