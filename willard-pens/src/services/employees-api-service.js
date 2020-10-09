import config from "../config";
import TokenService from "./token-service";

const employeesApiService = {
  getemployees() {
    return fetch(`${config.API_ENDPOINT}/employees`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });


  },
 
   
    });
  },

    });
  }
};

export default employeesApiService;