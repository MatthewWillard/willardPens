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
  postemployee(name, user_id) {
    return fetch(`${config.API_ENDPOINT}/employees`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
 
      })

  },
 
   
    });
  },

    });
  }
};

export default employeesApiService;