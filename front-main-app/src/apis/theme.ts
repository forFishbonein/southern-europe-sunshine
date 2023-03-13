import httpRequest from "@/request";
export const getAllThemeTypeInfo = () => {
  return httpRequest({
    method: "get",
    url: "/theme/type",
  });
};
export const getPageThemeInfo = (typeId, page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: `/theme/page/${typeId}`,
  });
};
export const getAllPageThemeInfo = (page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: "/theme/page",
  });
};
export const getAllThemeInfo = () => {
  return httpRequest({
    method: "get",
    url: "/theme",
  });
};
export const getOneThemeDetailInfo = (itemId) => {
  return httpRequest({
    method: "get",
    url: `/theme/${itemId}`,
  });
};
