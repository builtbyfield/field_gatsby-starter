/**
 * Column
 *
 * We use the Column component directly inside and only inside of the
 * Columns component. This gives us control over setting column width
 * and allows us to pass down spacing properties from Columns to each
 * individual Column.
 *
 * When we use a Column in another component, we must pass all props
 * into the Column so that the props from Columns are absorbed
 * properly. Use a spread operator like {...props} to do this.
 */

import React from "react"
import styled from "@emotion/styled"
import { system, get } from "styled-system"

import { Box } from "components"

const StyledBox = styled(Box)(
  system({
    gutterX: {
      properties: ["paddingRight", "paddingLeft"],
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
      properties: ["paddingTop", "paddingBottom"],
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

function Column({
  children,
  columnComponent,
  space = 0,
  spaceX,
  spaceY,
  width,
}) {
  return (
    <StyledBox
      data-component-id="column"
      as={columnComponent}
      flex={!width && 1}
      flexShrink={width === "content" && 0}
      width={width !== "content" ? width : null}
      minWidth={0}
      gutterX={spaceX ? spaceX : space}
      gutterY={spaceY ? spaceY : space}
    >
      <Box data-component-id="column.inner" height="100%">
        {children}
      </Box>
    </StyledBox>
  )
}

export default Column
