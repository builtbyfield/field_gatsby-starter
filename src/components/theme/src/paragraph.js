import text from "./text"

export default {
  "600": {
    fontSize: "24px",
    fontWeight: 300,
    lineHeight: "30px",
    "@media screen and (min-width: 672px)": {
      fontSize: "24px",
      lineHeight: "30px",
    },
    "@media screen and (min-width: 1056px)": {
      fontSize: "28px",
      lineHeight: "36px",
    },
    "@media screen and (min-width: 1312px)": {
      fontSize: "28px",
      lineHeight: "36px",
    },
    "@media screen and (min-width: 1584px)": {
      fontSize: "32px",
      lineHeight: "40px",
    },
  },
  "500": {
    ...text["500"],
    lineHeight: "24px",
  },
  "400": {
    ...text["400"],
    lineHeight: "20px",
  },
}
