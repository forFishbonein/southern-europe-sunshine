import { defineStore } from "pinia";
export const utilStore = defineStore("util", {
  state: () => ({
    // refreshNum: 0,
    refreshFlag: false,
  }),
  getters: {},
  actions: {
    // updateRefreshNum() {
    //   this.refreshNum += 1;
    // },
    // resetRefreshNum() {
    //   this.refreshNum = 0;
    // },
  },
  persist: {
    key: "util",
    storage: window.localStorage,
  },
});
