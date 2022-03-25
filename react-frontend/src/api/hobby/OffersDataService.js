import axios from "../customAxiosConfig/CustomAxiosConfig";
import AuthenticationService from "../authentication/AuthenticationService";

const OffersDataService = () => {
  let username = AuthenticationService.getLoggedInUser();

  try {
    return axios.get(`http://localhost:8080/business-owner/${username}`);
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default OffersDataService;
