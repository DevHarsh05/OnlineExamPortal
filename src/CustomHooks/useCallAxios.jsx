import React from "react";
import axios from "axios";

async function useCallAxios(type = "GET", apipath, sendata) {
  // let nodepath = ""
  let callapi = await axios({
    url: apipath,
    method: type,
    data: sendata,
  });

  return callapi.data;
}

export default useCallAxios;
