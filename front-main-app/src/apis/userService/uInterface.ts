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
  id: string;
  email: string;
  password?: string;
  status?: string;
  url?: string;
  name?: string;
  grade?: string;
  experience?: number;
  tele?: string;
  birthday?: string;
  post?: string;
  profession?: string;
  signature?: string;
  gender?: string;
  address?: string;
  visits?: string;
  deleted?: string;
  createTime?: string;
  updateTime?: string;
}
// 密码登录参数类型
export interface passLoginInfo {
  email: string;
  password: string;
}
// 验证码登录参数类型
export interface codeLoginInfo {
  email: string;
  code: string;
}
// 注册参数类型
export interface registerInfo {
  name: string;
  email: string;
  code: string;
}
