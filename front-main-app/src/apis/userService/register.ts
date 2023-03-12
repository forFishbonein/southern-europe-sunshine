import httpRequest from "@/request";
import { registerInfo } from "@/apis/userService/uInterface";
export const postCode = (email: string) => {
  console.log(email);
  return httpRequest({
    data: email,
    method: "post",
    url: "http://localhost:8081/send",
  });
};

export const register = (registerData: registerInfo) => {
  console.log(registerData);
  return httpRequest({
    data: registerData,
    method: "post",
    url: "http://localhost:8081/user/register",
    // loading: false,
  });
};
