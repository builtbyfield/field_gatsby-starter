import React from "react"

import { Box } from "components"

const AspectRatio = ({ children, ratio, ...rest }) => {
  const padding = ratio.split(":")

  return (
    <Box
      data-component-id="aspectRatio"
      position="relative"
      width="100%"
      pb={(padding[1] / padding[0]) * 100 + "%"}
      {...rest}
    >
      <Box
        data-component-id="aspectRatio.setSize"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
      >
        {children}
      </Box>
    </Box>
  )
}

AspectRatio.defaultProps = {
  ratio: "16:9",
}

export default AspectRatio
