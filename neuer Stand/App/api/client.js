import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://ttthesis.herokuapp.com/api/all",
});

export default apiClient;
