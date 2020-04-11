/**
 * VStack
 *
 * VStack allows us to vertically stack elements by a value
 * define by the space prop. It accepts most units and values
 * as well as spacing properties in the Theme.
 */

import React, { Children } from "react"

import { Box, Divider } from "components"

function flexAlign(x) {
  if (x === "start") return null
  if (x === "center") return "center"
  if (x === "end") return "flex-end"
  return undefined
}

function VStack({
  align = "start",
  as = "div",
  children,
  dividers = false,
  space = 0,
}) {
  const stackItems = Children.toArray(children)

  const isList = as === "ol" || as === "ul"
  const stackItemComponent = isList ? "li" : "div"

  return (
    <Box
      data-component-id="stacks.vStack"
      as={as}
      display={align !== "start" && "flex"}
      flexDirection={align !== "start" && "column"}
      alignItems={flexAlign(align)}
      m={0}
      p={0}
      css={isList && { listStyle: "none" }}
    >
      {stackItems.map((child, index) => (
        <Box
          data-component-id="stacks.vStack.child"
          as={stackItemComponent}
          pb={dividers ? undefined : space}
          css={{ ":last-of-type": { paddingBottom: 0 } }}
          key={"child" + index}
        >
          {dividers && index > 0 ? (
            <Box
              data-component-id="stacks.vStack.child.divider"
              width="100%"
              py={space}
            >
              <Divider />
            </Box>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  )
}

export default VStack
