import axios from "axios";
const Api = axios.create({ baseURL: "https://localhost:7010/api" });

export default Api;