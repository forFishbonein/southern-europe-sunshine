export interface themeTypesType {
  themeTypeId: string;
  typeName: string;
  createDate: string;
  remark: string;
}
export interface themeTypesRankingType {
  themeTypeId: string;
  typeName: string;
  createDate: string;
  remark: string;
  themeListInfo: themeListInfoType;
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
export interface localTypesType {
  type: string;
  count: string;
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
  isDeleted: Number;
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

export interface newsInfoType {
  newsId: Number;
  newsTitle: string;
  titlePic: string;
  newsContent: string;
  type: string;
  clickRate: Number;
  createDate: string;
  remark: string;
}
export interface membersInfoType {
  userid: Number;
  imageUrl: string;
  userName: string;
  enName: string;
  rankTitle: string;
  sex: Number;
  password: string;
  phone: string;
  address: string;
  birthday: string;
  email: string;
  education: string;
  interest: string;
  userType: Number;
  reMark: string;
  createDate: string;
  modifDate: string;
  isShowWeb: Number;
  isDeleted: Number;
}
