export interface IConfig {
  env: string; // 开发环境
  mock?: string; // mock数据
  title: string; // 项目title
  baseUrl?: string; // 项目地址
  baseApi?: string; // api请求地址
}
const envMap = {};
const globalModules = import.meta.globEager("./*.ts");
Object.entries(globalModules).forEach(([key, value]) => {
  // key.match(/\.\/env\.(\S*)\.ts/)
  const name = key.replace(/\.\/env\.(.*)\.ts$/, "$1");
  envMap[name] = value;
});

// 根据环境引入不同配置
export const config = envMap[import.meta.env.VITE_ENV].default;
console.log("根据环境引入不同配置", config);
