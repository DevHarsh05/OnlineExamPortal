import React from "react";

function useSessionData(key) {
  const LoginData = JSON.parse(sessionStorage.getItem(key));
  console.log(LoginData);

  if (LoginData) {
    let obj = {
      token: LoginData.token,
      logindetail: LoginData.data[0],
    };

    return obj;
  }
  return false;
}

export default useSessionData;
