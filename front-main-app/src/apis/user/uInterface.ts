/**
 * @description [ 统一类型接口 ]
 */

// export interface IResponseType<P = Record<string, unknown>> {
//   code: number;
//   msg: string;
//   data: P;
// }

// 用户信息类型
export interface UserInfo {
  userName: string;
  sex: string;
  address: string;
  email: string;
  phone: string;
  birthday: string;
  education: string;
  interest: string;
  reMark: string;
  imageUrl: string;
  isDeleted: string;
  modifDate: string;
  password: string;
  createDate: string;
  userType: Number;
  userid: Number;
}
// 密码登录参数类型
export interface passLoginInfo {
  email: string;
  password: string;
}
// // 验证码登录参数类型
// export interface codeLoginInfo {
//   email: string;
//   code: string;
// }
// 注册参数类型
export interface registerInfo {
  email: string;
  password: string;
}
