import axios from "axios";
import { baseUrl, getTokenFromLocalStorage } from "./Index";

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const formatData = (data) => {
  return data.map((column) => ({
    ...column,
    id: String(column.id),
    tasks: column.tasks.map((task) => ({
      ...task,
      id: String(task.id),
    })),
  }));
};

export const getRequest = async (path, params = {}) => {
  const token = getTokenFromLocalStorage;
  try {
    const response = await apiClient.get(baseUrl + path, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("GET Request Error:", error.response?.data || error.message);
    throw error;
  }
};

export const postRequest = async (path, data, isToken = true) => {
  const headers = isToken
    ? { Authorization: `Bearer ${getTokenFromLocalStorage}` }
    : {};

  console.log(`Bearer ${getTokenFromLocalStorage}`);
  try {
    const response = await apiClient.post(baseUrl + path, data, { headers });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("POST Request Error:", error.response?.data || error.message);
    throw error;
  }
};

export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
