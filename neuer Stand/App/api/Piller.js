import apiClient from "./client";

const endpoint = "/all";

const getPiller = () => apiClient.get(endpoint);

export default {
  getPiller,
};
