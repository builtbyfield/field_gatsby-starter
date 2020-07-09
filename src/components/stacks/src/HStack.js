/**
 * HStack
 *
 * HStack allows us to horizontally stack elements by a value
 * define by the space prop. It accepts most units and values
 * as well as spacing properties in the Theme.
 */

import React, { Children } from "react"

import { Box, Divider } from "components"

function flexAlign(x) {
  if (x === "start") return "flex-start"
  if (x === "center") return "center"
  if (x === "end") return "flex-end"
  return undefined
}

function HStack({ align, as = "div", children, dividers = false, space = 0 }) {
  const stackItems = Children.toArray(children)

  const isList = as === "ol" || as === "ul"
  const stackItemComponent = isList ? "li" : "div"

  return (
    <Box
      data-component-id="stacks.hStack"
      as={as}
      display="flex"
      justifyContent="flex-start"
      alignItems={flexAlign(align)}
      m={0}
      p={0}
      css={isList && { listStyle: "none" }}
    >
      {stackItems.map((child, index) => (
        <Box
          data-component-id="stacks.hStack.child"
          as={stackItemComponent}
          display="flex"
          minWidth={0}
          pr={dividers ? undefined : space}
          css={{ ":last-of-type": { paddingRight: 0 } }}
          key={"child" + index}
        >
          {dividers && index > 0 ? (
            <Box data-component-id="stacks.hStack.child.divider" px={space}>
              <Divider vertical />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  )
}

export default HStack
