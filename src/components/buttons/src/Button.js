/**
 * Button
 */

import React, { forwardRef, useState } from "react"
import { useTheme } from "emotion-theming"

import { Box, Icon, Text } from "components"

import buttonStyles from "./utils/buttonStyles"

const Button = forwardRef(
  (
    {
      as = "button",
      appearance = "default",
      intent = "default",
      children,
      height = 40,
      iconBefore,
      iconAfter,
      round,
      ...rest
    },
    ref
  ) => {
    const [isHovering, setIsHovering] = useState(false)

    const getTextSizeForControlHeight = height => {
      if (height <= 24) return 300
      if (height <= 28) return 300
      if (height <= 32) return 400
      if (height <= 36) return 400
      if (height <= 40) return 400
      return 500
    }

    const getIconSizeForButton = height => {
      if (height <= 28) return 12
      if (height <= 32) return 12
      if (height <= 40) return 16
      if (height <= 48) return 18
      return 20
    }

    const ICON_SIZE = getIconSizeForButton(height)
    const PADDING = Math.round(height / 3) + "px"
    const TEXT_SIZE = getTextSizeForControlHeight(height)

    return (
      <Text
        data-component-id="button"
        ref={ref}
        as={as}
        className={isHovering === true ? "isHovering" : undefined}
        size={TEXT_SIZE}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height={height + "px"}
        px={PADDING}
        borderRadius={round ? 9999 : 5}
        overflow="hidden"
        fontWeight={600}
        lineHeight={height + "px"}
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
        {iconBefore && (
          <Box data-component-id="button.iconBefore" as="span" pr="spacing.2">
            <Icon symbol={iconBefore} size={ICON_SIZE} color="currentColor" />
          </Box>
        )}
        <Box data-component-id="button.content" as="span">
          {children}
        </Box>
        {iconAfter && (
          <Box data-component-id="button.iconAfter" as="span" pl="spacing.2">
            <Icon symbol={iconAfter} size={ICON_SIZE} color="currentColor" />
          </Box>
        )}
      </Text>
    )
  }
)

export default Button
