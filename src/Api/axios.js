import axios from "axios";
const instance = axios.create({
  // version of localhost
  baseURL:"https://forum-api-deploy-20.onrender.com/api"
  // baseURL: "http://localhost:3000/api",

  // deployed version of Evangadi server in Render.com
  //   baseURL: "https://evangadi-forum-backend-mcyd.onrender.com/api",
});
export default instance;
