import httpRequest from "@/request";
export const getCityListByCountryId = (id) => {
  return httpRequest({
    method: "get",
    url: "/city/list?ciid=" + id,
  });
};
export const getScenicListByCityId = (id) => {
  return httpRequest({
    method: "get",
    url: "/scenic/list?cityid=" + id,
  });
};
export const getHotelListByCityId = (id) => {
  return httpRequest({
    method: "get",
    url: "/hotel/list?CityID=" + id,
  });
};
export const saveTotalRoutes = (allRoutes) => {
  return httpRequest({
    method: "post",
    data: allRoutes,
    url: "/route",
  });
};
export const getPlanRoutesByUserId = (id) => {
  return httpRequest({
    method: "post",
    url: `/route/${id}`,
  });
};
export const getOnePlanById = (id) => {
  return httpRequest({
    method: "post",
    url: `/route/detail/${id}`,
  });
};
