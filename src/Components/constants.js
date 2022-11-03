import { notification } from "antd";
export const linkedInLink =
  "https://www.linkedin.com/in/imran-shaikh-9b63a01aa/";

export const githubLink = "https://github.com/Imran940";

export const siteColor = {
  mainInRgb: "rgb(247,184,76)",
  light: "rgb(234,179,8)",
};

export const openNotification = (type, message) =>
  notification[type]({
    message,
  });
