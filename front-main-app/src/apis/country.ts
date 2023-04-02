import httpRequest from "@/request";
export const getCountrysInfo = () => {
  return httpRequest({
    method: "get",
    url: "/country/info",
    // loading: false, //显示加载圈
  });
};
export const getOneCountryInfo = (countryId) => {
  return httpRequest({
    method: "get",
    url: `/country/info/${countryId}`,
    // loading: false, //显示加载圈
  });
};
