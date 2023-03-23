import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    numberInfo: {},
    suffix: {
      marginLeft: "4px",
      color: token.colorText,
      fontSize: "16px",
      fontStyle: "normal",
    },
    numberInfoTitle: {
      marginBottom: "16px",
      color: token.colorText,
      fontSize: token.fontSizeLg,
      transition: "all 0.3s",
    },
    numberInfoSubTitle: {
      height: "22px",
      overflow: "hidden",
      color: token.colorTextSecondary,
      fontSize: token.fontSize,
      lineHeight: "22px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      wordBreak: "break-all",
    },
    numberInfoValue: {
      "& > span": { color: token.colorText },
    },
    subTotal: {
      marginRight: "0",
      color: token.colorTextSecondary,
      fontSize: token.fontSizeLg,
      verticalAlign: "top",
    },
    ".anticon": {
      marginLeft: "4px",
      fontSize: "12px",
      transform: "scale(0.82)",
    },
    ".anticon-caret-up": {
      color: token.red6,
    },
    ".anticon-caret-down": {
      color: token.green6,
    },
    numberInfolight: {},
  };
});

export default useStyles;