import httpRequest from "@/request";
export const getVisaListInfo = (type: Number, page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: `/visa/page/${type}`,
  });
};

export const getInsuranceListInfo = (type: Number, page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: `/visa/page/${type}`,
  });
};

export const getNewsListInfo = (page, limit) => {
  return httpRequest({
    method: "post",
    data: {
      current: page,
      size: limit,
    },
    url: "/news/page",
  });
};

export const getOneNewsInfo = (newsId) => {
  return httpRequest({
    method: "get",
    url: `/news/${newsId}`,
  });
};
export const getOneVisaInfo = (visaId) => {
  return httpRequest({
    method: "get",
    url: `/visa/${visaId}`,
  });
};
