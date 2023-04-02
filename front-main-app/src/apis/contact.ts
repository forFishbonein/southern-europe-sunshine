import httpRequest from "@/request";
export const getTeamMembersInfo = () => {
  return httpRequest({
    method: "get",
    url: "/user/web",
  });
};
export const postContactToUs = (dataInfo) => {
  return httpRequest({
    method: "post",
    data: dataInfo,
    url: "/contact/info",
  });
};
