import httpRequest from "@request/index";
import { UserInfo } from "@/apis/user/uInterface";
export const getUserInfo = (token: string) => {
  return httpRequest({
    url: "/token",
    method: "get",
    headers: { Authorization: token },
    loading: false, //这里好像必须开启，不知道为啥！！！这样有token时配合路由监测进主页的时候才不会报错！
  });
};
export const getUserInfoById = (userId: string) => {
  return httpRequest({
    url: `http://localhost:8081/user/${userId}`,
    method: "get",
    // loading: false,
  });
};

/* 修改用户信息 */
export const modifyUserInfo = (userInfo: UserInfo) => {
  return httpRequest({
    data: userInfo,
    method: "post",
    url: "/user/info",
    // loading: false,
  });
};

/* 修改密码 */
export const modifyUserPass = (data: any) => {
  return httpRequest({
    url: "http://localhost:8081/user/updatepassword",
    method: "put",
    data: data,
    // loading: false,
  });
};

/* 更新头像 */
export const updateUserAvater = (userId: string, imgUrl: string) => {
  return httpRequest({
    url: "http://localhost:8081/user/updatehead",
    method: "put",
    data: {
      id: userId,
      url: imgUrl,
    },
    // loading: false,
  });
};
