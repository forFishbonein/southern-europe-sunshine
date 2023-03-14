import httpRequest from "@/request";
export const getAllLocalTypeInfo = () => {
  return httpRequest({
    method: "get",
    url: "/localplay/type",
  });
};

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
