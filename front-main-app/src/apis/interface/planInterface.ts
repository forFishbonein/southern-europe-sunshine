export interface finalAllDaysPlanInfoType {
  userId: string;
  totalbBudget: string;
  departDays: string;
  fromCity: string;
  backCity: string;
  allDaysPlan: everyDayPlanInfoType[]; //对应allDaysPlan
  goDate: string;
  contactWay: string;
  contactName: string;
}
/* 每一天的内容（包括城市和酒店） */
//对应allDaysPlan里面的每一项
export interface everyDayPlanInfoType {
  //   city: string;
  //   cityId: string;
  //   dayLength: number | null; //游玩的天数
  date: string;
  destinationId: Array<string>; //对应days
  hotelId: Array<string>; //对应days
  budget: string;
  //   weather: string;
}
/* 一个城市每一天的所有路线 */
//对应days里面的每一项
// export interface everyDayRoutesType {
//   route: routeInfoType[]; //对应route
// }
/* 一个路线，对应route里面的每一项 */
// export interface contentInfoType {
//   destinationId: string; //景点
//   //   destinationName: string;
//   hotelId: string; //酒店
//   //   hotelName: string;
// }
