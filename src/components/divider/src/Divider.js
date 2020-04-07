import React from "react"

import { Box } from "components"

function Divider() {
  return (
    <Box data-component-id="divider" position="relative">
      <Box
        data-component-id="divider.line"
        position="absolute"
        width="100%"
        height="1px"
        bg="surface.border"
        css={{ transform: "translateY(-50%)" }}
      />
    </Box>
  )
}

export default Divider
