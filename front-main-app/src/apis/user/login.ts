import httpRequest from "@/request";
import { passLoginInfo } from "@/apis/user/uInterface";
export const passLogin = (passData: passLoginInfo) => {
  // console.log(passData);
  return httpRequest({
    data: passData,
    method: "post",
    url: "/login",
    // loading: false, //显示加载圈
  });
};

// export function logout(token: string) {
//   return httpRequest({
//     data: token,
//     url: "/logout",
//     method: "post",
//     // loading: false,
//   });
// }
