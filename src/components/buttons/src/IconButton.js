/**
 * IconButton
 */

import React, { forwardRef, useState } from "react"
import { useTheme } from "emotion-theming"

import { Box, Icon } from "components"

import buttonStyles from "./utils/buttonStyles"

const IconButton = forwardRef(
  (
    {
      as = "button",
      appearance = "default",
      intent = "default",
      height = 40,
      symbol,
      round,
      ...rest
    },
    ref
  ) => {
    const [isHovering, setIsHovering] = useState(false)

    const getIconSizeForButton = height => {
      if (height <= 28) return 16
      if (height <= 32) return 18
      if (height <= 40) return 20
      if (height <= 48) return 24
      return 24
    }

    const ICON_SIZE = getIconSizeForButton(height)

    return (
      <Box
        data-component-id="iconButton"
        ref={ref}
        as={as}
        className={isHovering === true ? "isHovering" : undefined}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        width={height + "px"}
        height={height + "px"}
        borderRadius={round ? 9999 : 3}
        overflow="hidden"
        fontWeight={500}
        css={{
          ...buttonStyles(appearance, intent, useTheme()),
          userSelect: "none",
          whiteSpace: "nowrap",
          cursor: "pointer",
          "&:focus": { outline: 0 },
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...rest}
      >
        <Icon symbol={symbol} size={ICON_SIZE} color="currentColor" />
      </Box>
    )
  }
)

export default IconButton
