import config from "../config";
import TokenService from "./token-service";

const employeesApiService = {
  getemployees() {
    return fetch(`${config.API_ENDPOINT}/employees`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }



  },
 
   
    });
  },

    });
  }
};

export default employeesApiService;