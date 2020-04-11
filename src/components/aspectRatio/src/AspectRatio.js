/**
 * AspectRatio
 *
 * Takes the property `ratio` and splits it into an array
 * which then has its values divided by each other and
 * multiplied by 100%. This results in a component where
 * child elements are confined to space.
 *
 * This is good for images and video elements.
 *
 * Assigning `overflow: hidden` to the component will hide
 * anything that might be larger than the aspect ratio.
 */

import React from "react"
import styled from "@emotion/styled"
import { system } from "styled-system"

import { Box } from "../../box"

const StyledBox = styled(Box)(
  system({
    ratio: {
      property: "paddingBottom",
      transform: n => {
        let padding = n.split(":")
        return (padding[1] / padding[0]) * 100 + "%"
      },
    },
  })
)

const AspectRatio = ({ children, ratio, ...rest }) => {
  return (
    <StyledBox
      data-component-id="aspectRatio"
      position="relative"
      width="100%"
      ratio={ratio}
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
    </StyledBox>
  )
}

AspectRatio.defaultProps = {
  ratio: "16:9",
}

export default AspectRatio
