let messageInstance: any | null = null;

//封装ElMessage的函数：
const resetMessage = (options) => {
  if (messageInstance && messageInstance.close) {
    messageInstance.close();
  }
  //@ts-ignore
  messageInstance = ElMessage(options);
};

//识别resetMessage函数的参数类型，以适应.success等函数
["error", "success", "info", "warning"].forEach((type) => {
  resetMessage[type] = (options: any) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    options.type = type;
    return resetMessage(options);
  };
});
export const Message = resetMessage;
