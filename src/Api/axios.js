import axios from "axios";
const instance = axios.create({
  // version of localhost
  baseURL:"https://forum-api-deploy-20.onrender.com/api"

    // baseURL:"https://evangadiforum-be.kelilmohamad.com/api"
  // baseURL: "http://localhost:3000/api",

});
export default instance;
