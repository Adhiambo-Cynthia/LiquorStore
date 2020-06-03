import axios from "axios"

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
  //timeout: 10000  //timeouts if the API call takes more than 15 seconds to respond
});

export default{
    getProducts(){
        return apiClient.get()
    }
}