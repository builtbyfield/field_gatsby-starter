import React, { forwardRef } from "react"

import { Box } from "components"

const Icon = forwardRef(
  ({ color = "label.0", size = 24, symbol = "", ...rest }, ref) => {
    return (
      <Box
        data-component-id="icon"
        ref={ref}
        as="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={size + "px"}
        height={size + "px"}
        fontSize={size + "px"}
        color={color}
        {...rest}
      >
        <Box
          as="i"
          className={`${"ri-" + symbol}`}
          css={{ lineHeight: size + "px" }}
        />
      </Box>
    )
  }
)

export default Icon
