/**
 * Global Styles
 *
 * Here we define global styles that can reference the Theme
 */

import React from "react"
import { Global } from "@emotion/core"
import css from "@styled-system/css"
import { hsl, normalize } from "polished"

const GlobalStyles = () => (
  <Global
    styles={css({
      ...normalize(),
      "*": { boxSizing: "border-box" },
      body: {
        overflowX: "hidden",
        overflowY: "scroll",
        m: 0,
        fontFamily: "sans",
        color: "full",
        bg: hsl(0, 0, 1),
        // WebkitFontSmoothing: "antialiased",
        // MozOsxFontSmoothing: "grayscale",
        overscrollBehavior: "none",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
    })}
  />
)

export default GlobalStyles
