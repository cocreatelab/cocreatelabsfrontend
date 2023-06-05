import axios from "axios";
(function () {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
})();
export default axios.create({
  // baseURL:'http://127.0.0.1:8000/'
  baseURL: "http://kashishjain.pythonanywhere.com/"

});


export const base_url = "http://kashishjain.pythonanywhere.com/";
// export const base_url = "http://127.0.0.1:8000/";
