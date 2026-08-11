import React from "react";
import axios from "axios";

async function useCallAxios(type = "GET", apipath, sendata) {
  let nodepath = "http://localhost:3030/api/";

  let callapi = await axios({
    url: nodepath + apipath,
    method: type,
    data: sendata,
  });

  return callapi.data;
}

export default useCallAxios;
