import axios from "axios";
import swal from "sweetalert";

const GetRequest = (setData, url) => {
  const apiUrl = { url };

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return error;
    });
};

export default GetRequest;

export const GetFilter = (parameters, setFilteredPackage) => {
  axios
    .get("https://api.tanzaniatrails.co.tz/api/filter_packages", {
      params: parameters,
    })
    .then((response) => {
      setFilteredPackage(response.data);
    })
    .catch((error) => {
      swal("Oops...!", "Something went wrong, please try again!", "error");
      return error;
    });
};
