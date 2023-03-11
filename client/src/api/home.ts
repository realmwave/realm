import axios from "axios";


const url = "http://localhost:3333/api/user/public/home";

export default async function getHomeData() {
  try {
    const response = await axios({
      url: url,
      method: 'get',
    })
    return response.data
  } catch (error:any) {
    return error.message
  }
};

