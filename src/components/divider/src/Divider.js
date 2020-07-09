import React from "react"
import { Box } from "components"

function HorizontalDivider({ width, color }) {
  return (
    <Box
      data-component-id="horizontalDivider"
      position="relative"
      width={width ? width : "100%"}
    >
      <Box
        data-component-id="horizontalDivider.line"
        position="absolute"
        width="100%"
        height="1px"
        bg={color ? color : "separator"}
        css={{ transform: "translateY(-50%)" }}
      />
    </Box>
  )
}

function VerticalDivider({ height, color }) {
  return (
    <Box
      data-component-id="verticalDivider"
      position="relative"
      height={height ? height : "100%"}
    >
      <Box
        data-component-id="verticalDivider.line"
        position="absolute"
        width="1px"
        height="100%"
        bg={color ? color : "separator"}
        css={{ transform: "translateX(-50%)" }}
      />
    </Box>
  )
}

function Divider({ horizontal, vertical, width, height, color }) {
  if (horizontal) return <HorizontalDivider width={width} color={color} />
  else if (vertical) return <VerticalDivider height={height} color={color} />
  else return <HorizontalDivider width={width} color={color} />
}

export default Divider
