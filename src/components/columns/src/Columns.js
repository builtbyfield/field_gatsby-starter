/**
 * Columns
 *
 * Columns is the direct parent of Column and defines the
 * spacing between each Column.
 *
 * Columns can accept both Theme properties as well as
 * values as whole numbers or pixels.
 */

import React from "react"
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
      properties: ["marginRight", "marginLeft"],
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
      properties: ["marginTop", "marginBottom"],
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

function Columns({ alignY, as = "div", children, space = 0, spaceX, spaceY }) {
  /**
   * Setting the "as" prop to "ol" or "ul" will turn the Columns
   * component into a ol or ul element and all Column children
   * into li items.
   */
  const isList = as === "ol" || as === "ul"
  const columnComponent = isList ? "li" : "div"

  // Pass properties down to children
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      columnComponent: columnComponent,
      space: space,
      spaceX: spaceX,
      spaceY: spaceY,
    })
  )

  return (
    <StyledBox
      data-component-id="columns"
      as={as}
      display="flex"
      flexWrap="wrap"
      alignItems={flexAlign(alignY)}
      negativeMarginX={spaceX ? spaceX : space}
      negativeMarginY={spaceY ? spaceY : space}
      p={0}
      css={{ listStyle: "none" }}
    >
      {childrenWithProps}
    </StyledBox>
  )
}

export default Columns
