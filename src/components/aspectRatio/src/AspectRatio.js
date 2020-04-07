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
