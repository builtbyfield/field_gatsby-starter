/**
 * Inline
 *
 * If you’d like to render a set of components in
 * a row with equal spacing around them, wrapping
 * onto multiple lines when necessary, we provide
 * an ‘Inline’ component.
 */

import React, { Children } from "react"
import styled from "@emotion/styled"
import { system, get } from "styled-system"

import { Box } from "components"

function flexAlign(x) {
  if (x === "start") return "flex-start"
  if (x === "center") return "center"
  if (x === "end") return "flex-end"
  return undefined
}

const StyledBox = styled(Box)(
  /**
   * These system specifications absorb values defined in the Theme
   * and converts them to whole numbers. It's also set up whole
   * numbers or pixel values.
   *
   * Refer to https://styled-system.com/api#system to learn more
   * about how the system utility works and its implementation.
   *
   * If more information is required we recommend referring to the
   * source code for styled-system where its author uses system to
   * create most of the style props that we actually use.
   */
  system({
    negativeMarginX: {
      property: "marginLeft",
      scale: "space", // Refer the space scale in Theme
      transform: (n, scale) => {
        let value = get(scale, n)
        if (!value) {
          value = n
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""))
            return "-" + number / 2 + "px"
          } else {
            return "-" + value / 2 + "px"
          }
        } else {
          return "-" + value / 2 + "px"
        }
      },
    },
    negativeMarginY: {
      property: "marginTop",
      scale: "space", // Refer the space scale in Theme
      transform: (n, scale) => {
        let value = get(scale, n)
        if (!value) {
          value = n
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""))
            return "-" + number / 2 + "px"
          } else {
            return "-" + value / 2 + "px"
          }
        } else {
          return "-" + value / 2 + "px"
        }
      },
    },
  })
)

const InnerStyledBox = styled(Box)(
  /** Works like the component above but for padding */
  system({
    gutterX: {
      property: "paddingLeft",
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n)
        if (!value) {
          value = n
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""))
            return number / 2 + "px"
          } else {
            return value / 2 + "px"
          }
        } else {
          return value / 2 + "px"
        }
      },
    },
    gutterY: {
      property: "paddingTop",
      scale: "space",
      transform: (n, scale) => {
        let value = get(scale, n)
        if (!value) {
          value = n
        }
        if (typeof n === "string") {
          if (n.indexOf("px") !== -1) {
            let number = parseInt(n.replace("px", ""))
            return number / 2 + "px"
          } else {
            return value / 2 + "px"
          }
        } else {
          return value / 2 + "px"
        }
      },
    },
  })
)

function Inline({
  align = "start",
  as = "div",
  children,
  space = 0,
  spaceX,
  spaceY,
}) {
  const isList = as === "ol" || as === "ul"
  const stackItemComponent = isList ? "li" : "div"

  return (
    <StyledBox
      data-component-id="inline"
      as={as}
      display="flex"
      flexWrap="wrap"
      justifyContent={flexAlign(align)}
      negativeMarginX={spaceX ? spaceX : space}
      negativeMarginY={spaceY ? spaceY : space}
      css={isList && { listStyle: "none" }}
    >
      {Children.map(children, child =>
        child !== null && child !== undefined ? (
          <InnerStyledBox
            data-component-id="inline.child"
            as={stackItemComponent}
            minWidth={0}
            gutterX={spaceX ? spaceX : space}
            gutterY={spaceY ? spaceY : space}
          >
            {child}
          </InnerStyledBox>
        ) : null
      )}
    </StyledBox>
  )
}

export default Inline
