import httpRequest from "@/request";
import { passLoginInfo, codeLoginInfo } from "@/apis/userService/uInterface";
export const passLogin = (passData: passLoginInfo) => {
  console.log(passData);
  return httpRequest({
    data: passData,
    method: "post",
    url: "http://localhost:8081/login",
    // loading: false, //显示加载圈
  });
};

export function codeLogin(codeData: codeLoginInfo) {
  console.log(codeData);
  return httpRequest({
    data: codeData,
    method: "post",
    url: "http://localhost:8081/codelogin",
    // loading: false,
  });
}

export function logout(token: string) {
  return httpRequest({
    data: token,
    url: "http://localhost:8081/logout",
    method: "post",
    // loading: false,
  });
}
