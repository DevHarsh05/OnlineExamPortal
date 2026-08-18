import React from "react";
import axios from "axios";
import useSessionData from "./useSessionData";

async function useCallAxios(type = "GET", apipath, sendata = null, token) {
  let nodepath = "http://localhost:3030/api/";

  let callapi = await axios({
    url: nodepath + apipath,
    method: type,
    data: sendata,
    headers: {
      authorization: token,
    },
  });

  return callapi.data;
}

export default useCallAxios;
