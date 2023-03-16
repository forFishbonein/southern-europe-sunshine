import { cityInfoType } from "@/apis/interface/resultType";
export interface totalRouteInfoType {
  budget: string;
  contacts: string;
  createDate: string;
  days: string;
  id: string;
  num: Number;
  phone: string;
  remark: string;
  returnDate: string;
  routeDetailsVoList: oneRouteDetailInfoType2[];
  startDate: string;
  title: string;
  userId: Number;
}
export interface totalRouteInfoTypeVo {
  budget: string;
  contacts: string;
  days: string;
  num: Number;
  phone: string;
  returnDate: string;
  routeDetailsList: oneRouteDetailInfoTypeVo[];
  startDate: string;
  title: string;
  userId: Number;
}
export interface oneRouteDetailInfoType {
  cityId: string;
  countryId: string;
  createDate: string;
  date: string;
  id: string;
  infoId: string;
  itineraryId: string;
  remark: string;
  type: string;
  userId: Number;
}
export interface oneRouteDetailInfoTypeVo {
  cityId: string;
  countryId: string;
  date: string;
  itineraryId: string;
  type: string;
  userId: Number;
  //坐标
  //名字
  //城市名
}
export interface oneRouteDetailInfoType2 {
  cityId: string;
  countryId: string;
  createDate: string;
  date: string;
  id: string;
  infoId: string;
  itineraryId: string;
  remark: string;
  type: string;
  userId: Number;
  hotelinfo: hotelInfoType;
  scenicspotinfo: scenicInfoType;
  cityinfoList: cityInfoType[];
}
export interface scenicInfoType {
  scenicsid: Number;
  cityid: Number;
  scenicNameEn: string;
  abbreScenic: string;
  scenicNameCn: string;
  scenicTickets: Number;
  scenicLogo: string;
  scenicCoord: string;
  guideFee: Number;
  otherExpense: Number;
  scenicRating: string;
  scenicType: string;
  principals: string;
  scenicPhone: string;
  scenicAddress: string;
  website: string;
  scenicDetail: string;
  createDate: string;
  lastModif: string;
  isDeleted: Number;
  remark: Number;
}
export interface hotelInfoType {
  hotelID: Number;
  cityid: Number;
  hotelNameCn: string;
  abbreHotel: string;
  hotelNameEn: string;
  hotelRating: string;
  hotelPhone: string;
  hotelCoord: string;
  hotelLogo: string;
  hotelAddress: string;
  principal: string;
  hotelType: string;
  createDate: string;
  isDeleted: Number;
  lastModif: string;
  remark: string;
}
