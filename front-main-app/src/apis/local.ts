import httpRequest from "@/request";
// export const getAllThemeTypeInfo = () => {
//   return httpRequest({
//     method: "get",
//     url: "http://localhost:8999/theme/type",
//   });
// };
export const getPageLocalInfo = (localType, page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: `/localplay/page/${localType}`,
  });
};
export const getAllPageLocalInfo = (page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: "/localplay/page",
  });
};
