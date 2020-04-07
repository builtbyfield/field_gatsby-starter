/**
 * Wrapper
 *
 * We use the Wrapper to center and max-out content so
 * that we maintain readable text and organized content
 * through the main spreads of the project.
 *
 * This controls the margins on each side of the content
 * so that content never bleeds into the edge of the
 * screen.
 */

import React from "react"

import { Box } from "components"

function Wrapper({
  as = "section",
  bg = "transparent",
  children,
  maxWidth = 960,
  pb,
  pt,
  px = [20, null, 32],
  ...rest
}) {
  return (
    <Box
      data-component-id="wrapper"
      as={as}
      px={px}
      pt={pt}
      pb={pb}
      bg={bg}
      overflow="hidden"
      {...rest}
    >
      <Box
        data-component-id="wrapper.inner"
        width="100%"
        maxWidth={maxWidth}
        mx="auto"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Wrapper
