export interface themeTypesType {
  themeTypeId: string;
  typeName: string;
  createDate: string;
  remark: string;
}
export interface themeListInfoType {
  themeId: Number;
  themeTypeId: Number;
  cityId: Number;
  userId: Number;
  themeTitle: string;
  titlePic: string;
  themeContent: string;
  clickRate: Number;
  createDate: string;
  remark: string;
  cityinfos: cityInfoType[];
}
export interface localListInfoType {
  playId: Number;
  cityId: string;
  userId: Number;
  playType: string;
  typePic: string;
  playTitle: string;
  titlePic: string;
  playContent: string;
  playPrice: Number;
  playSeason: string;
  clickRate: Number;
  createDate: string;
  remark: string;
  cityinfos: cityInfoType[];
}
export interface cityInfoType {
  cityID: Number;
  userid: Number;
  ciid: Number;
  cityNameEn: string;
  cityNameCn: string;
  cityCoordinate: string;
  createDate: string;
  lastModif: string;
  remark: string;
}
export interface conutryInfoType {
  ciid: Number;
  userid: string;
  countryNameEn: string;
  countryNameCn: string;
  nationalFlag: string;
  createDate: string;
  lastModif: string;
  countryCoord: string;
  remark: string;
  nationalPic: string;
}